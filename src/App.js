import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Solfege from './components/Solfege';
import keys from './data';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState(keys['c-key']);
  
  const handleKeyClick = ({ target }) => {
    setCurrent(keys[target.id]);
    new Audio(keys[target.id].note).play();
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
