import type {FC} from 'react'
import { useCalendar } from '../../context';

interface DayProps {
    day: number;
}

const Day:FC<DayProps> = ({day}) => {
    const { month, year, showModal } = useCalendar();
    const handleClick = () => {
        const selectedDate = new Date(year, month, day);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        showModal(selectedDate >= currentDate);
    };

    return(
        <div onClick={handleClick}>{day}</div>
    )
}

export default Day;