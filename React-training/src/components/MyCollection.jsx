
import MusicCard from "./MusicCard";

//const collectionAlbums = [];

export default function MyCollection({collection, onToggle}) {

    if (collection.length === 0) {
        return <h2>My Collection is Empty</h2>;
      }

    



    return (
        <div className="music-list" >
        {collection.map((album) => (
          <MusicCard key={album.id} {...album} liked onToggle={() => onToggle(album)} />
        ))}
      </div>
    );
}