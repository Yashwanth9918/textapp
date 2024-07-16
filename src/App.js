import React, { useState } from 'react';
import './App.css';
// import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* <Router> */}
      
        <Navbar title="AsUWish" mode={mode} togglemode={togglemode} about="About U"/>
        <div className="container my-3">
        {/* <Routes> */}
            {/* <Route path="/about" element={<About mode={mode} />} /> */}
            <TextForm heading="Enter Required Text" mode={mode} />
        {/* </Routes>        */}
        </div>
        
      {/* </Router> */}
    </>
  );
}

export default App;
