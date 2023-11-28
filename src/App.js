import './App.css';
import Header from './Components.js/Header';
import HomePage from './Components.js/HomePage/HomePage';
import { useState } from 'react';

function App() {
  const [hamburger, sethamburger] = useState(false);
  return (
  <div className='container'>
    <div className='row'>
      <Header hamburger={hamburger} sethamburger={sethamburger} />
    </div>
    <HomePage hamburger={hamburger} />
  </div>
  );
}

export default App;
