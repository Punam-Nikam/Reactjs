import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import React, {useState} from 'react';

function App() {
  const [mode,setMode]=useState('light'); //wheather dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light')
      {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      //document.body.style.color='white';
      }
      else{
      setMode('light');
      document.body.style.backgroundColor='white';  
      //document.body.style.color='black';
    }
    }

  return (
     <>
     <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
     <div className="container my-3"/>
     <TextForms heading="Enter your text here.." mode={mode}/>  
     <About/>
    
    </>
  );
}

export default App;