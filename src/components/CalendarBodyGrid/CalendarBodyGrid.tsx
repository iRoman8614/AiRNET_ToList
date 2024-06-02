import type {FC} from 'react';

import styles from './CalendarBodyGrid.module.css'
import {useCalendar} from "../../context";
import Day from "../Day/Day";

const CalendarBodyGrid:FC = () => {
    const { month, year } = useCalendar();

    const getDaysInMonth = () => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = () => {
        const firstDay = new Date(year, month, 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    };

    const daysInMonth = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();

    const offsetDays = Array(firstDay).fill(null);

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return(
        <div className={styles.root}>
            {offsetDays.map((_, index) => (
                <div key={`offset-${index}`} className={styles.dayEmpty}></div>
            ))}
            {days.map(day => (
                <div key={day} className={styles.day}>
                    <Day day={day} />
                </div>
            ))}
        </div>
    )
}

export default CalendarBodyGrid;