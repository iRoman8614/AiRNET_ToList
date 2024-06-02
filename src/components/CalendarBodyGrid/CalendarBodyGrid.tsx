import type {FC} from 'react';
import {useEffect, useState} from "react";
import {useCalendar} from "../../context";
import Day from "../Day/Day";
import {fetchMonthDataApi} from '../../API/isDayOff'

import styles from './CalendarBodyGrid.module.css'

const CalendarBodyGrid:FC = () => {
    const { month, year } = useCalendar();
    const [daysStatus, setDaysStatus] = useState<number[]>([]);

    useEffect(() => {
        fetchMonthDataApi(year, month).then(setDaysStatus);
    }, [year, month]);

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
            {days.map((day, index) => (
                <Day day={day} isDayOff={daysStatus[index] === 1} />
            ))}
        </div>
    )
}

export default CalendarBodyGrid;