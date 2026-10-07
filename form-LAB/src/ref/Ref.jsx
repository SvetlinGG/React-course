import { useRef } from "react";

export default function Ref() {

    const ref = useRef();

    const focusHandler = () => {

    }


    return (
        <>
        <h1>Use Ref Hook</h1>

        <button onClick={focusHandler} >Focus</button>
        </>
    );
}