import Keyboard from './components/Keyboard';
import Solfege from './components/Solfege';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Movable Do</h1>
      <p>Click a key on the keyboard to set your "Do"</p>
      <Keyboard />
      <Solfege />
    </div>
  );
}

export default App;
