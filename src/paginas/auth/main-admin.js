import React from 'react';
import { Link } from "react-router-dom";

const Mainad = () => {
        return (
<div className="container">
  <div id="logo">
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <line id="line1" x1={150} y1="31.1" x2={100} y2="56.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line2" x1={100} y1="56.1" x2={50} y2="31.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line3" x1={50} y1="31.1" x2={100} y2="6.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line4" x1={100} y1="6.1" x2={150} y2="31.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line5" x1={100} y1="56.1" x2={100} y2={100} stroke="#ffffff" strokeWidth={6} />
      <line id="line6" x1={50} y1="31.1" x2={50} y2="131.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line7" x1={150} y1="31.1" x2={150} y2="131.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line8" x1={50} y1="131.1" x2={100} y2="161.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line9" x1={150} y1="131.1" x2={100} y2="161.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line10" x1={50} y1="131.1" x2={20} y2="161.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line11" x1={150} y1="131.1" x2={180} y2="161.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line12" x1={20} y1="161.1" x2={100} y2="211.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line13" x1={180} y1="161.1" x2={100} y2="211.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line14" x1={20} y1="161.1" x2={20} y2="51.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line15" x1={180} y1="161.1" x2={180} y2="51.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line16" x1={20} y1={50} x2={100} y2="101.1" stroke="#ffffff" strokeWidth={6} />
      <line id="line17" x1={180} y1="51.1" x2={100} y2="101.1" stroke="#ffffff" strokeWidth={6} />
    </svg>
  </div>
  <p id="welcome">BIENVENIDOS A</p>
  <h1 id="title">MegaMuebles</h1>
  <div className="buttons">
    <button className="register">Registrate </button> 
    <button className="login">Iniciar Sesion</button>
  </div>
</div>

    );

}



export default Mainad;