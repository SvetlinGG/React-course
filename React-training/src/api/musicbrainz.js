// MusicBrainz API client
// Docs: https://musicbrainz.org/doc/MusicBrainz_API
// Covers: Cover Art Archive (https://coverartarchive.org)
//
// Rules from MusicBrainz:
//  - max ~1 request per second (we queue requests below)
//  - no API key needed

const BASE_URL = 'https://musicbrainz.org/ws/2';
const COVER_URL = 'https://coverartarchive.org';
const MIN_DELAY_MS = 1100; // a bit more than 1 sec to be safe
const MAX_RETRIES = 3; // retries when the server says "too busy" (503)

// ---------- low-level request with rate limit ----------

let queue = Promise.resolve();
let lastRequestTime = 0;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function request(path, params = {}) {
  const url = new URL(`${BASE_URL}/${path}`);
  Object.entries({ ...params, fmt: 'json' }).forEach(([key, value]) => {
    if (value !== undefined && value !== null) url.searchParams.set(key, value);
  });

  // every request waits for the previous one -> max 1 request/sec
  const run = async () => {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const elapsed = Date.now() - lastRequestTime;
      if (elapsed < MIN_DELAY_MS) await wait(MIN_DELAY_MS - elapsed);
      lastRequestTime = Date.now();

      const response = await fetch(url, { headers: { Accept: 'application/json' } });
      if (response.ok) return response.json();

      // 503 = "too many requests" -> wait longer and try again
      if (response.status === 503 && attempt < MAX_RETRIES) {
        await wait(MIN_DELAY_MS * 2 ** (attempt + 1));
        continue;
      }
      throw new Error(`MusicBrainz error ${response.status}: ${response.statusText}`);
    }
  };

  const result = queue.then(run, run);
  queue = result.catch(() => {}); // one failed request must not block the queue
  return result;
}

// ---------- helpers ----------

// 301626 ms -> "5:01"
export function formatDuration(ms) {
  if (!ms) return '';
  const totalSeconds = Math.round(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// Picture of album. size: 250 | 500 | 1200
// Use directly in <img src={...} />. If there is no cover, the image gives 404 -> use onError for a fallback.
export function getCoverUrl(albumId, size = 250) {
  return `${COVER_URL}/release-group/${albumId}/front-${size}`;
}

// genre with the most votes
function topGenre(genres = []) {
  if (!genres.length) return '';
  return [...genres].sort((a, b) => b.count - a.count)[0].name;
}

// Search text goes into a Lucene query -> escape special chars like ( ) : " ! ?
function escapeQuery(text) {
  return text.trim().replace(/([+\-&|!(){}[\]^"~*?:\\/])/g, '\\$1');
}

// "Artist Name" from artist-credit array (handles "A feat. B")
function creditName(credit = []) {
  return credit.map((c) => c.name + (c.joinphrase ?? '')).join('');
}

// ---------- artists ----------

// Search artists by name -> [{ id, name, country, type }]
export async function searchArtists(name, limit = 10) {
  const data = await request('artist', { query: `artist:(${escapeQuery(name)})`, limit });
  return data.artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
    country: artist.country ?? '',
    type: artist.type ?? '',
    disambiguation: artist.disambiguation ?? '',
  }));
}

// One artist by MusicBrainz id
export async function getArtist(artistId) {
  const artist = await request(`artist/${artistId}`, { inc: 'genres' });
  return {
    id: artist.id,
    name: artist.name,
    country: artist.country ?? '',
    type: artist.type ?? '',
    genre: topGenre(artist.genres),
    lifeSpan: artist['life-span'] ?? {},
  };
}

// ---------- albums ----------

// All studio albums of an artist, oldest first
// -> [{ id, album, artist, genre, year, releaseDate, cover }]
export async function getAlbums(artistId, artistName = '', limit = 100) {
  const data = await request('release-group', {
    artist: artistId,
    type: 'album',
    inc: 'genres',
    limit,
  });

  return data['release-groups']
    .filter((rg) => rg['secondary-types'].length === 0) // skip live, compilations, etc.
    .map((rg) => {
      const releaseDate = rg['first-release-date'] ?? '';
      return {
        id: rg.id,
        album: rg.title,
        artist: artistName,
        genre: topGenre(rg.genres),
        year: releaseDate ? Number(releaseDate.slice(0, 4)) : null,
        releaseDate, // "1991-09-24" (sometimes only "1991")
        cover: getCoverUrl(rg.id),
      };
    })
    // oldest first, albums without a date go to the end
    .sort((a, b) => (a.releaseDate || '9999').localeCompare(b.releaseDate || '9999'));
}

// ---------- songs ----------

// Songs of an album (takes the first official release of the album)
// -> [{ id, position, title, length, duration }]
export async function getSongs(albumId) {
  const data = await request('release', {
    'release-group': albumId,
    status: 'official',
    inc: 'recordings media',
    limit: 1,
  });

  const release = data.releases[0];
  if (!release) return [];

  return release.media.flatMap((disc) =>
    disc.tracks.map((track) => ({
      id: track.id,
      disc: disc.position,
      position: track.position,
      title: track.title,
      length: track.length, // ms
      duration: formatDuration(track.length), // "5:01"
    }))
  );
}

// ---------- search albums / songs ----------

// Search albums by title -> same shape as getAlbums()
export async function searchAlbums(title, limit = 20) {
  const data = await request('release-group', {
    query: `releasegroup:(${escapeQuery(title)}) AND primarytype:album`,
    limit,
  });

  return data['release-groups'].map((rg) => {
    const releaseDate = rg['first-release-date'] ?? '';
    return {
      id: rg.id,
      album: rg.title,
      artist: creditName(rg['artist-credit']),
      genre: rg.tags?.length ? topGenre(rg.tags) : '',
      year: releaseDate ? Number(releaseDate.slice(0, 4)) : null,
      releaseDate,
      cover: getCoverUrl(rg.id),
    };
  });
}

// Search songs by title
// -> [{ id, title, artist, album, albumId, year, releaseDate, duration, cover }]
export async function searchSongs(title, limit = 20) {
  const data = await request('recording', {
    query: `recording:(${escapeQuery(title)})`,
    limit,
  });

  return data.recordings.map((rec) => {
    const release = rec.releases?.[0];
    const albumId = release?.['release-group']?.id ?? null;
    const releaseDate = rec['first-release-date'] ?? release?.date ?? '';
    return {
      id: rec.id,
      title: rec.title,
      artist: creditName(rec['artist-credit']),
      album: release?.title ?? '',
      albumId,
      year: releaseDate ? Number(releaseDate.slice(0, 4)) : null,
      releaseDate,
      length: rec.length ?? null,
      duration: formatDuration(rec.length),
      cover: albumId ? getCoverUrl(albumId) : null,
    };
  });
}

// One entry point for the search page. type: 'artist' | 'album' | 'song'
export function search(type, text) {
  if (type === 'artist') return searchArtists(text, 20);
  if (type === 'album') return searchAlbums(text);
  if (type === 'song') return searchSongs(text);
  throw new Error(`Unknown search type: ${type}`);
}

// ---------- everything together ----------

// Artist + all albums + songs for every album.
// WARNING: 1 request per album (1 sec each) -> an artist with 15 albums takes ~17 sec.
// For a list page better use getAlbums() and load getSongs() only on the details page.
export async function getArtistFull(artistName) {
  const [found] = await searchArtists(artistName, 1);
  if (!found) return null;

  const artist = await getArtist(found.id);
  const albums = await getAlbums(artist.id, artist.name);

  for (const album of albums) {
    album.songs = await getSongs(album.id);
  }

  return { ...artist, albums };
}
