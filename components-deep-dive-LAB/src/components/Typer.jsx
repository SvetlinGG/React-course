import { useState } from 'react'
export default function Typer() {
    const [key, setKey] = useState(null)

    const keyDownHandler = () => {
        console.log('pressed key');
        
    }


    return (
        <section onKeyDown={keyDownHandler}>
            <h2>Typer</h2>

            <p>Pressed Key</p>
            <strong>A</strong>
        </section>
    );
}