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


    return (
        <section>
            <h2>Calendar</h2>

            <h3>{day < 5 ? 'Workday' : 'Weekend'}</h3>

            <div>Current Day {days.at(day)}</div>

            <button onClick={nextDayClickHandler}>Next Day</button>
        </section>
    );
}