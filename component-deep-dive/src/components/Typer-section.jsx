import { useState } from 'react';
import Typer from "./Typer";

export default function TyperSection() {

    const [isPaused, setIsPaused] = useState(false)

    const pauseHandler = () => {
        setIsPaused(true);
    }


    return (

        <section>
            <h1>Typer</h1>
            {isPaused
                ? <p>Typer is paused!</p>
                : <Typer />
            }
            <button onClick={pauseHandler}>Pause</button>
        </section>
    );
}