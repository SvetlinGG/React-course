import { useEffect, useState } from "react";

export default function Swapi() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => console.log(data.results))
    })


    return (
        <section>
            <h2>SW Characters</h2>

            <ul>
                <li>
                    {name[0]}
                </li>
            </ul>
        </section>
    );
}