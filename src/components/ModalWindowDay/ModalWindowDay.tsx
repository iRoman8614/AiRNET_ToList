import React, { useState } from 'react';
import { useCalendar } from '../../context';

import styles from './ModalWindowDay.module.css';

const ModalWindowDay: React.FC = () => {
    const { isModalOpen, closeModal, showForm, day, month, year, tasks, addTask, removeTask, toggleTaskStatus, currentProfile } = useCalendar();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if (!isModalOpen) return null;

    const date = new Date(year, month, day);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const currentTasks = tasks[currentProfile]?.[formattedDate] || [];

    const handleAddTask = () => {
        if (title.trim()) {
            addTask(date, { title, desc: description.trim() ? description : ' ', status: "0" });
            setTitle('');
            setDescription('');
        } else {
            alert("Необходимо ввести название задачи");
        }
    };

    return (
        <div className={styles.root}>
            <h2 className={styles.date}>{formattedDate}</h2>
            {currentTasks.length > 0 ?
                <div>
                    <h3 className={styles.list}>Задачи:</h3>
                    <div className={styles.task}>
                        {currentTasks.map((task, index) => (
                            <div key={index}>
                                <h2 style={{ textDecoration: task.status === "1" ? 'line-through' : 'none' }}>{index + 1}. {task.title}</h2>
                                <p className={styles.description}>{task.desc}</p>
                                <div className={styles.buttonSet}>
                                    <button className={styles.statusBtn} onClick={() => toggleTaskStatus(date, index)}>
                                        {task.status === "1" ? "Снять выполнение" : "Пометить как выполненное"}
                                    </button>
                                    <button className={styles.deleteBtn} onClick={() => removeTask(date, index)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                :
                <h3 className={styles.list}>Задач нет</h3>
            }
            {showForm && (
                <div className={styles.form}>
                    <h3>Добавить новую задачу</h3>
                    <input
                        className={styles.titleInput}
                        type="text"
                        placeholder="Название задачи"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className={styles.descInput}
                        placeholder="Описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button className={styles.addBtn} onClick={handleAddTask}>Добавить задачу</button>
                </div>
            )}
            <button onClick={closeModal} className={styles.closeBtn}>Закрыть</button>
        </div>
    );
};

export default ModalWindowDay;
