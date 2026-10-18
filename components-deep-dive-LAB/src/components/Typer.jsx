import { useEffect, useState } from 'react'
export default function Typer() {
    const [key, setKey] = useState('')

    useEffect(() => {
        console.log('pressed key');
        
    },[])

    const keyDownHandler = (e) => {
        setKey(e.key)
        
    }


    return (
        <section tabIndex={0} onKeyDown={keyDownHandler}>
            <h2>Typer</h2>

            <p>Pressed Key</p>
            <strong>{key}</strong>
        </section>
    );
}