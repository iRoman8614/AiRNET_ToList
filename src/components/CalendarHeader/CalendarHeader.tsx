import type { FC, ChangeEvent } from 'react';
import {useState} from 'react'
import { useCalendar } from '../../context/context';

import styles from './CalendarHeader.module.css';

const CalendarHeader: FC = () => {
    const { profiles, currentProfile, setCurrentProfile, addProfile } = useCalendar();
    const [newProfile, setNewProfile] = useState('');

    const handleAddProfile = () => {
        if (newProfile.trim()) {
            addProfile(newProfile);
            setNewProfile('');
        }
    };

    const handleProfileChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentProfile(e.target.value);
    };

    return (
        <div className={styles.root}>
            <h1>Календарь</h1>
            <div className={styles.form}>
                <select className={styles.selector} value={currentProfile} onChange={handleProfileChange}>
                    {profiles.map(profile => (
                        <option key={profile} value={profile}>{profile}</option>
                    ))}
                </select>
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Имя нового профиля'
                    value={newProfile}
                    onChange={(e) => setNewProfile(e.target.value)}
                />
                <button className={styles.addBtn} onClick={handleAddProfile}>+</button>
            </div>
        </div>
    );
}

export default CalendarHeader;
