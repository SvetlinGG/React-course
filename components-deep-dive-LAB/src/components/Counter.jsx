import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const counterHandler = () => {
        setCount(count + 1);
    }

    const resetHandler =  () => {
        setCount(0);

    }

    return (

        <>
        <h3>Counter {count}</h3>
        <button onClick={counterHandler}>Count</button>
        <button onClick={resetHandler}>Reset</button>
        </>
    );
}