import logo from './logo.svg';
import './App.css';
import Grid from './Grid';
import { useState } from 'react';

function App() {
  const [size, setSize] = useState(16)
  function handleInputChange(e){
    setSize(e.target.value)
  }


  return (
    <div className="App">
      <input type="range" min={0} max={16} onChange={handleInputChange}/>
      <p>Rzędy: {size}</p>
        <Grid size={size} />
    </div>
  );
}

export default App;
