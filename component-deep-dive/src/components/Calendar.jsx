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
    return (
        <section>
            <h2>Calendar</h2>

            <div>Current Day {days.at(day)}</div>
        </section>
    );
}