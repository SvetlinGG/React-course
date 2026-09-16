import { useState } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount( count + 1)
    }


    return (
        <section>
            <h3>Counter: {count}</h3>
            <button onClick={incrementClickHandler}>+</button>
        </section>
    );
}