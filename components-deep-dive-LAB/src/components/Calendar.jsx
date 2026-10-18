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

    const nextDayClickHandler = () => {
        setDay(day => day + 1)
    }

    if ( day > 6){
        setDay(0)
    }
    const isWorkday = day < 5;

    


    return (
        <>
        <h2>Week Days</h2>

        <div>Current day {days.at(day)}</div>
        <button onClick={nextDayClickHandler}>Next Day</button>

        {isWorkday && (
            <section>
            <div>Program</div>
            <ul>
                <li>Work</li>
                <li>Eat</li>
                <li>Sleep</li>
            </ul>
            </section>
        )}
        <button onClick={nextDayClickHandler}>Next Day</button>
        </>
    
    );

    

   
}