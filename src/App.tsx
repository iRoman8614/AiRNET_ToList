import React from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";
import {CalendarProvider} from "./context";
import ModalWindowDay from "./components/ModalWindowDay/ModalWindowDay";

function App() {
  return (
      <CalendarProvider>
          <div className='app'>
              <Calendar />
              <ModalWindowDay />
          </div>
      </CalendarProvider>
  );
}

export default App;
