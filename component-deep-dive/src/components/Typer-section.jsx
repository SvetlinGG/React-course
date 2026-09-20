import { useState } from 'react';
import Typer from "./Typer";

export default function TyperSection() {

    const [isPaused, setIsPaused] = useState(false)

    const pauseHandler = () => {
        setIsPaused(state => !state);
    }


    return (

        <section>
            <h1>Typer</h1>
            {isPaused
                ? <p>Typer is paused!</p>
                : <Typer />
            }
            <button onClick={pauseHandler}>{ isPaused ? 'Typing' : 'Pause'}</button>
        </section>
    );
}