import type {FC} from 'react'

import styles from './Calendar.module.css'
import WeekDaysNames from "../WeekDaysNames/WeekDaysNames";
import CalendarNavBar from "../CalendarNavBar/CalendarNavBar";
import CalendarBodyGrid from "../CalendarBodyGrid/CalendarBodyGrid";
import CalendarHeader from "../CalendarHeader/CalendarHeader";

const Calendar:FC = () => {
    return(
        <div className={styles.root}>
            <CalendarHeader />
            <CalendarNavBar />
            <WeekDaysNames />
            <CalendarBodyGrid />
        </div>
    )
}

export default Calendar;