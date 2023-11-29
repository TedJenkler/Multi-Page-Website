import './App.css';
import Footer from './Components.js/Footer';
import Header from './Components.js/Header';
import HomePage from './Components.js/Pages/HomePage';
import About from './Components.js/Pages/About';
import Contact from './Components.js/Pages/Contact';
import Locations from './Components.js/Pages/Locations';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebDesign from './Components.js/Pages/WebDesign';
import GraphicDesign from './Components.js/Pages/GrapicDesign';
import AppDesign from './Components.js/Pages/AppDesign';

function App() {
  const [hamburger, sethamburger] = useState(false);
  return (<>
  <div className='container'>
    <div className='row'>
      <Header hamburger={hamburger} sethamburger={sethamburger} />
    </div>
    <Routes>
      <Route path="/" element={ <HomePage hamburger={hamburger}/> } />
      <Route path="about" element={ <About hamburger={hamburger}/> } />
      <Route path="contact" element={ <Contact hamburger={hamburger}/> } />
      <Route path="locations" element={ <Locations hamburger={hamburger}/> } />
      <Route path="webdesign" element={ <WebDesign hamburger={hamburger} />} />
      <Route path="app" element={ <AppDesign hamburger={hamburger} />} />
      <Route path="graphicdesign" element={ <GraphicDesign hamburger={hamburger} />} />
    </Routes>
    <Footer />
  </div>

  </>);
}

export default App;
