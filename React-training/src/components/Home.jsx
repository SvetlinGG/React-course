import { music } from '../data/music';
import MusicCard from './MusicCard';

export default function MusicList() {
  return (
    <section className="music-list">
      {music.map((item) => (
        <MusicCard
          key={item.id}
          artist={item.artist}
          album={item.album}
          genre={item.genre}
          year={item.year}
        />
      ))}
    </section>
  );
}
