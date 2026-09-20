import { useEffect, useState } from "react";

export default function Typer() {

    const [key, setKey] = useState('');

    useEffect(() => {
        
        console.log('mounted');
    },[])

    const keyDownHandler = (event) => {

        setKey(event.key);
        console.log(event.key);
        
    }


    return (
        <section tabIndex={0} onKeyDown={keyDownHandler}>
            <h1>Typer</h1>
            <p>Pressed Key</p>

            <strong>A</strong>
        </section>
    );
}