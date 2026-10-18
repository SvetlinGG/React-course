import { useEffect, useState } from "react";

export default function Swapi() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])


    return (
        <section>
            <h2>SW Characters</h2>

            <ul>
                {characters.map(character => <li key={character}>{character.name}</li>)}
            </ul>
        </section>
    );
}