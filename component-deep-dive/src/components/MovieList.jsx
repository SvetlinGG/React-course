import { useState } from "react";

export default function MovieList() {

    const [movies, setMovies] = useState([
        'Matrix',
        'Man of Steel',
        'Lord of the Ring',
        'Star Wars'
    ])

    const addMovieHandler =() => {
        setMovies(prevMovies => [...prevMovies, 'The Terminator'])
    }
    return (
        <div>
            <h3>Movie List:</h3>
            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={addMovieHandler}>Add Movie</button>
        </div>
    );
}