import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface CalendarContextType {
    month: number;
    year: number;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
    isModalOpen: boolean;
    showModal: (showForm: boolean) => void;
    closeModal: () => void;
    showForm: boolean;
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
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [isModalOpen, setModalOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const showModal = (showForm: boolean) => {
        setShowForm(showForm);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <CalendarContext.Provider value={{ month, year, setMonth, setYear, isModalOpen, showModal, closeModal, showForm }}>
            {children}
        </CalendarContext.Provider>
    );
}
