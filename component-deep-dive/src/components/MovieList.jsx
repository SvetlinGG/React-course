import { useState } from "react";

export default function MovieList() {

    const [movies, setMovies] = useState([
        'Matrix',
        'Man of Steel',
        'Lord of the Ring',
        'Star Wars'
    ])

    const addMovieHandler = () => {
        setMovies(prevMovies => { 

        const newMovie = [...prevMovies];

        const removedMovie = newMovie.shift();

        newMovie.push(removedMovie);

        return newMovie;

    });
}
    return (
        <div>
            <h3>Movie List:</h3>
            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={addMovieHandler}>Update Movies</button>
        </div>
    );
}