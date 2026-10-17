import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)
    return (

        <>
        <h3>Counter {}</h3>
        <button>Count</button>
        </>
    );
}