import './MusicCatalog.css';

export default function MyCollection({ collection, onToggle }) {

    if (collection.length === 0) {
        return <h2>My Collection is empty</h2>
    }

    return (
        <div className="container">
            <ul className="album-list">
                {collection.map((album) => (
                    <li key={album.id} className="album-card">
                        <h3>{album.album}</h3>
                        <p className="artist">{album.artist}</p>
                        <p>{album.year}</p>
                        <p className="genre">{album.genre}</p>
                        <button className="add-btn" onClick={() => onToggle(album)}>Remove from Collection</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
