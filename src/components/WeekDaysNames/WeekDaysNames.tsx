import type {FC} from 'react'
import mock from '../../mock/dayNames.json'

import styles from './WeekDaysNames.module.css'

const WeekDaysNames:FC = () => {
    return(
        <div className={styles.root}>
            {mock.ru.map(item => {
                return <p key={item}>{item}</p>;
            })}
        </div>
    )
}

export default WeekDaysNames;