import type { FC } from 'react';
import { useCalendar } from '../../context';

import styles from './Day.module.css';

interface DayProps {
    day: number;
    isDayOff: boolean;
}

const Day: FC<DayProps> = ({ day, isDayOff }) => {
    const { month, year, showModal, setDay, tasks, currentProfile } = useCalendar();

    const handleClick = () => {
        const selectedDate = new Date(year, month, day);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        setDay(day);
        showModal(selectedDate >= currentDate);
    };

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const dateOfThisDay = new Date(year, month, day);

    const isPast = dateOfThisDay < currentDate;

    const className = `${isPast ? (isDayOff ? styles.offPast : styles.workPast) : (isDayOff ? styles.off : styles.work)}`;

    const date = new Date(year, month, day);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const currentTasks = tasks[currentProfile]?.[formattedDate] || [];

    return (
        <div className={styles.root} onClick={handleClick}>
            <div className={className}>{day}</div>
            {currentTasks.length > 0 && (
                <div className={styles.taskList}>
                    {currentTasks.map((task, index) => (
                        <div className={styles.task} key={index}>{index + 1}.{task.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Day;
