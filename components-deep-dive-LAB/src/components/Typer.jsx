import { useEffect, useState } from 'react'
export default function Typer() {
    const [key, setKey] = useState('')

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
        setKey(e.key)
        
    } )
        
    },[])

    


    return (
        <section >
            <h2>Typer</h2>

            <p>Pressed Key</p>
            <strong>{key}</strong>
        </section>
    );
}


