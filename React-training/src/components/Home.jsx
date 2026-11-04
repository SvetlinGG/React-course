import { music } from '../data/music';
import MusicCard from './MusicCard';

export default function Home({collection, onToggle}) {

    //const visibleMusic = music.slice(0, 10)


  return (
    <section className="music-list">
      
        {music.map((item) => (<MusicCard 
        {...item} 
        liked={collection.some(a => a.id === item.id)}
        onToggle={() => onToggle(item)}
        />
        ))}
    </section>
  );
}
