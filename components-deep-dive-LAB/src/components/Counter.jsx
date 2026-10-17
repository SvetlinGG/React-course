import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const counterHandler = () => {
        setCount(count + 1);
    }


    return (

        <>
        <h3>Counter {count}</h3>
        <button>Count</button>
        </>
    );
}