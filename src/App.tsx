import React from 'react';
import Calendar from "./components/Calendar/Calendar";
import {CalendarProvider} from "./context/context";
import ModalWindowDay from "./components/ModalWindowDay/ModalWindowDay";

import './App.css';

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
