// Modal.tsx
import React from 'react';
import { useCalendar } from '../../context';

const ModalWindowDay: React.FC = () => {
    const { isModalOpen, closeModal, showForm } = useCalendar();

    if (!isModalOpen) return null;  // Не рендерим модальное окно, если оно не активно

    return (
        <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100, backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="modal-content">
                {showForm ? (
                    <div>Форма для ввода данных</div>
                ) : (
                    <div>Недоступная дата</div>
                )}
                <button onClick={closeModal} style={{ marginTop: '20px' }}>Закрыть</button>
            </div>
            <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={closeModal}></div>
        </div>
    );
};

export default ModalWindowDay;
