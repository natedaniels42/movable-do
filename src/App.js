import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Solfege from './components/Solfege';
import keys from './data';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState(keys['c-key']);
  
  const handleKeyClick = ({ target }) => {
    setCurrent(keys[target.id]);
  }

  return (
    <div className="App">
      <h1>Movable Do</h1>
      <p>Click a key on the keyboard to set your "Do"</p>
      <Keyboard handleKeyClick={handleKeyClick} current={current} />
      <Solfege current={current} />
    </div>
  );
}

export default App;
