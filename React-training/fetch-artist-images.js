// Script to fetch artist images from iTunes API
// Run: node fetch-artist-images.js

const artists = [
  "Pink Floyd",
  "Michael Jackson",
  "Nirvana",
  "Fleetwood Mac",
  "Daft Punk",
  "Kendrick Lamar",
  "Adele",
  "Radiohead",
  "Miles Davis",
  "Led Zeppelin",
  "The Beatles",
  "Bob Marley & The Wailers",
  "Amy Winehouse",
  "Metallica",
  "Beyoncé",
  "Johnny Cash",
  "Stevie Wonder",
  "Eminem",
  "Taylor Swift",
  "AC/DC",
  "Billie Eilish",
  "David Bowie",
  "Nas",
  "Arctic Monkeys",
  "Dua Lipa",
  "Bruce Springsteen",
  "Kraftwerk",
  "Herbie Hancock",
  "The Weeknd",
  "Lauryn Hill"
];

async function fetchArtistImage(artistName) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(artistName)}&entity=musicArtist&limit=1`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      // Get the artworkUrl100 and convert it to high resolution
      const artworkUrl = data.results[0].artworkUrl100;
      if (artworkUrl) {
        // Convert to 600x600 for better quality
        const highResUrl = artworkUrl.replace('100x100bb.jpg', '600x600bb.jpg');
        return highResUrl;
      }
    }
    return null;
  } catch (error) {
    console.error(`Error fetching image for ${artistName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Fetching artist images from iTunes API...\n');

  const results = [];

  for (const artist of artists) {
    const imageUrl = await fetchArtistImage(artist);
    results.push({ artist, imageUrl });
    console.log(`${artist}: ${imageUrl || 'NOT FOUND'}`);

    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n\nResults in JSON format:');
  console.log(JSON.stringify(results, null, 2));
}

main();
