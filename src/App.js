import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Teresa Silva"
        avatar= "https://randomuser.me/api/portraits/women/81.jpg"
              online />
      <Contact name="Camila Daniels"
        avatar="https://randomuser.me/api/portraits/women/60.jpg"
       />
      <Contact name="Ken Matthews"
        avatar="https://randomuser.me/api/portraits/men/95.jpg"
        online />
    </div>
  );
}

export default App;
