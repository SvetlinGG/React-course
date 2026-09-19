import { useState } from "react";

export default function MovieList() {

    const [movies, setMovies] = useState([
        'Matrix',
        'Man of Steel',
        'Lord of the Ring',
        'Star Wars'
    ])
    return (
        <div>
            <ul>
                {movies.map(movie => <li>{movie}</li>)}
            </ul>
        </div>
    );
}