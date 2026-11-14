//import { useEffect, useState } from 'react';
import { albums } from '../data/music';


export default function MusicCatalog() {

    
    return (
        <div className="container">
            {
                albums.map((album) => (
                    <ul>
                    <li key={album.id}>
                        <h3>{album.album}</h3>
                        <p>{album.artist}</p>
                        <p>{album.year}</p>
                        <p>{album.genre}</p>
                    </li>
                    </ul>
                ))
            }
        </div>
    );
}