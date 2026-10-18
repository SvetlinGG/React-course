import { useState } from "react";

const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];


export default function Calendar() {
    const [ day, setDay] = useState(0)


    return (
        <>
        <h2>Week Days</h2>

        <div>Current day {days.at(day)}</div>
        </>
    
    );
}