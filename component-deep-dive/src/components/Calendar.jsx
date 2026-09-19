import { useState } from "react";

const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

export default function Calendar() {

    const [day, setDay] = useState(0);

    const nextDayClickHandler = () => {
        setDay((prevDay) => (prevDay + 1) % days.length)
    }

    const resetClickHandler = () => {
        setDay(0)
    }

    if ( day > 6){
        return (
            <section>
                <h2>Invalid day</h2>

                <button onClick={resetClickHandler}>Reset Day</button>
            </section>
        )
    }
    const isWorkDay = day < 5

    return (
        <section>
            <h2>Calendar</h2>

            <h3>{isWorkDay ? <span>Workday</span> : <span>Weekend</span>}</h3>

            <div>Current Day {days.at(day)}</div>

            {isWorkDay &&<div>
                <h3>Work Schedule</h3>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </div>
            }

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}