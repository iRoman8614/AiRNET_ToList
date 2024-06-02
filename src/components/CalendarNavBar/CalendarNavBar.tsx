import type {FC} from 'react'
import monthes from '../../mock/monthes.json'
import years from '../../mock/years.json'

import styles from './CalendarNavBar.module.css'
import {useCalendar} from "../../context";

const CalendarNavBar:FC = () => {
    const { month, year, setMonth, setYear } = useCalendar();

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value, 10));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(parseInt(e.target.value, 10));
    };

    const handlePrevMonth = () => {
        if (month > 0) {
            setMonth(month - 1);
        } else {
            setMonth(11);
            setYear(year - 1);
        }
    };

    const handleNextMonth = () => {
        if (month < 11) {
            setMonth(month + 1);
        } else {
            setMonth(0);
            setYear(year + 1);
        }
    };


    return(
        <div className={styles.root}>
            <button className={styles.monthBtn} onClick={handlePrevMonth}>{"<"}</button>
            <select className={styles.selector} value={month} onChange={handleMonthChange}>
                {monthes.ru.map((item, index) => {
                    return <option key={index} value={index}>{item}</option>;
                })}
            </select>
            <select className={styles.selector} value={year} onChange={handleYearChange}>
                {years.years.map((item) => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </select>
            <button className={styles.monthBtn} onClick={handleNextMonth}>{">"}</button>
        </div>
    )
}

export default CalendarNavBar;
