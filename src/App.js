import './App.css';
import Header from './Components.js/Header';
import HomePage from './Components.js/HomePage/HomePage';

function App() {
  return (
  <div className='container'>
    <div className='row'>
      <Header />
    </div>
    <HomePage />
  </div>
  );
}

export default App;
