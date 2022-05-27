import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Otpinput } from './Components/Otpinput';

function App() {
  const handleChange= (otp:string) =>{
    console.log("Received",otp);
  }
  return (
    <div className="App">
      <h1>PIN INPUT</h1>
      <Otpinput totalInputs={5} onChange={handleChange}/>
    </div>
  );
}

export default App;
