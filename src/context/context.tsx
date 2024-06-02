import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';

interface Task {
    title: string;
    desc: string;
    status: string;
}

interface Tasks {
    [profile: string]: {
        [date: string]: Task[];
    };
}

interface CalendarContextType {
    day: number;
    month: number;
    year: number;
    tasks: Tasks;
    setTasks: (tasks: Tasks) => void;
    setDay: (day: number) => void;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
    isModalOpen: boolean;
    showModal: (showForm: boolean) => void;
    closeModal: () => void;
    showForm: boolean;
    addTask: (date: Date, task: Task) => void;
    removeTask: (date: Date, index: number) => void;
    toggleTaskStatus: (date: Date, index: number) => void;
    profiles: string[];
    currentProfile: string;
    addProfile: (profile: string) => void;
    setCurrentProfile: (profile: string) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) throw new Error("useCalendar must be used within a CalendarProvider");
    return context;
}

interface CalendarProviderProps {
    children: ReactNode;
}

export const CalendarProvider: FC<CalendarProviderProps> = ({ children }) => {
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [tasks, setTasks] = useState<Tasks>({});
    const [isModalOpen, setModalOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [profiles, setProfiles] = useState<string[]>(['Общий']);
    const [currentProfile, setCurrentProfile] = useState<string>('Общий');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('ToDoListTasks') || '{}') as Tasks;
        const storedProfiles = JSON.parse(localStorage.getItem('ToDoListProfiles') || '["Общий"]');
        setTasks(storedTasks);
        setProfiles(storedProfiles);
    }, []);

    useEffect(() => {
        console.log('Saving tasks to localStorage', tasks);
        localStorage.setItem('ToDoListTasks', JSON.stringify(tasks));
        localStorage.setItem('ToDoListProfiles', JSON.stringify(profiles));
    }, [tasks, profiles]);

    const showModal = (showForm: boolean) => {
        setShowForm(showForm);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const addTask = (date: Date, task: Task) => {
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        const profile = currentProfile;
        const existingTasks = tasks[profile]?.[formattedDate] || [];
        const newTasks = {
            ...tasks,
            [profile]: {
                ...tasks[profile],
                [formattedDate]: [...existingTasks, task],
            },
        };
        setTasks(newTasks);
    };

    const removeTask = (date: Date, index: number) => {
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        const profile = currentProfile;
        const updatedTasks = tasks[profile]?.[formattedDate].filter((_, i) => i !== index) || [];
        setTasks({
            ...tasks,
            [profile]: {
                ...tasks[profile],
                [formattedDate]: updatedTasks,
            },
        });
    };

    const toggleTaskStatus = (date: Date, index: number) => {
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        const profile = currentProfile;
        const task = tasks[profile][formattedDate][index];
        task.status = task.status === "1" ? "0" : "1";
        const updatedTasks = [
            ...tasks[profile][formattedDate].slice(0, index),
            task,
            ...tasks[profile][formattedDate].slice(index + 1),
        ];
        setTasks({
            ...tasks,
            [profile]: {
                ...tasks[profile],
                [formattedDate]: updatedTasks,
            },
        });
    };

    const addProfile = (profile: string) => {
        if (!profiles.includes(profile)) {
            setProfiles([...profiles, profile]);
            setTasks({
                ...tasks,
                [profile]: {}
            });
        }
    };

    return (
        <CalendarContext.Provider
            value={{
                day,
                month,
                year,
                tasks,
                setTasks,
                setDay,
                setMonth,
                setYear,
                isModalOpen,
                showModal,
                closeModal,
                showForm,
                addTask,
                removeTask,
                toggleTaskStatus,
                profiles,
                currentProfile,
                addProfile,
                setCurrentProfile
            }}>
            {children}
        </CalendarContext.Provider>
    );
}
