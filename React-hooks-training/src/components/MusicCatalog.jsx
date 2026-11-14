//import { useEffect, useState } from 'react';
import { albums } from '../data/music';
import './MusicCatalog.css';


export default function MusicCatalog() {


    return (
        <div className="container">
            <ul className="album-list">
                {albums.map((album) => (
                    <li key={album.id} className="album-card">
                        <h3>{album.album}</h3>
                        <p className="artist">{album.artist}</p>
                        <p>{album.year}</p>
                        <p className="genre">{album.genre}</p>
                        <button className="add-btn">Add to Collection</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}