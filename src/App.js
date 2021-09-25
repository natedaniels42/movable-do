import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Solfege from './components/Solfege';
import keys from './data';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState(keys['c-key']);
  
  const handleKeyClick = ({ target }) => {
    const pianoKeys = document.getElementsByClassName('key');
    for (let i = 0; i <= 11; i++) {
      if (pianoKeys[i].getAttribute('class').includes('black')) {
        pianoKeys[i].style.fill = 'black';
      } else {
        pianoKeys[i].style.fill = 'white';
      }
    }
    setCurrent(keys[target.id]);
    new Audio(keys[target.id].note).play();
    target.style.fill = 'lightgrey';
  }

  return (
    <div className="App">
      <h1>Movable D&#333;</h1>
      <p>Click a key on the keyboard to set your "D&#333;"</p>
      <Keyboard handleKeyClick={handleKeyClick} current={current} />
      <Solfege current={current} />
    </div>
  );
}

export default App;
