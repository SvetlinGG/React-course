import { music } from '../data/music';
import MusicCard from './MusicCard';

export default function Home() {

    //const visibleMusic = music.slice(0, 10)


  return (
    <section className="music-list">
      
        {music.map((item) => (<MusicCard key={item.id} {...item} />))}
      
    </section>
  );
}
