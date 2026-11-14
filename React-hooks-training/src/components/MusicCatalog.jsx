//import { useEffect, useState } from 'react';
import { useState } from 'react';
import { albums } from '../data/music';
import './MusicCatalog.css';


export default function MusicCatalog() {

    const [collection, setCollection] = useState([]);

    const toggleAlbum = (album) => {
        setCollection(prev =>
            prev.some(a => a.id === album.id)
            ? prev.filter(a => a.id !== album.id)
            : [...prev, album]
        )
    }


    return (
        <div className="container">
            <ul className="album-list">
                {albums.map((album) => (
                    <li key={album.id} className="album-card">
                        <h3>{album.album}</h3>
                        <p className="artist">{album.artist}</p>
                        <p>{album.year}</p>
                        <p className="genre">{album.genre}</p>
                        <button className="add-btn" onToggle={toggleAlbum}>Add to Collection</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}