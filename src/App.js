import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'darkblue';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode has been disabled","warning");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Props" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text to analyze below" showAlert={showAlert} mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
