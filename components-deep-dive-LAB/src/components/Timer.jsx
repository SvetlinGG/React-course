import { useState } from "react";

export default function Timer() {

    

    const [timer, setTimer] = useState(0)

    setTimeout(() => {
        setTimer(seconds => seconds + 1)
        console.log(timer);
        
    },1000)


    return (
        <>
        <h1>Timer</h1>
        <p>{timer} seconds</p>
        </>
    );
}