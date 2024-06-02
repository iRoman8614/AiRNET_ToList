import type {FC} from 'react'

import styles from './Calendar.module.css'
import WeekDaysNames from "../WeekDaysNames/WeekDaysNames";
import CalendarNavBar from "../CalendarNavBar/CalendarNavBar";
import CalendarBodyGrid from "../CalendarBodyGrid/CalendarBodyGrid";

const Calendar:FC = () => {
    return(
        <div className={styles.root}>
            <div>Calendar</div>
            <CalendarNavBar />
            <WeekDaysNames />
            <CalendarBodyGrid />
        </div>
    )
}

export default Calendar;