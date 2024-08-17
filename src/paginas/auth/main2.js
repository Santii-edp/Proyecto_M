import React from 'react';
import { Link } from "react-router-dom";

const Main2 = () => {
        return (
 <><style dangerouslySetInnerHTML={{ __html: "\n                body {\n    background-color: #221B32;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    cursor: pointer;\n    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(300, 300, 300, 0.1) 1px, transparent 0.1px);\n    background-size: 50px 50px;\n}\n\n.container {\n    text-align: center;\n}\n\n#logo {\n    width: 200px;\n    height: 200px;\n    margin: 0 auto 20px auto;\n    position: relative;\n}\n\nsvg {\n    width: 100%;\n    height: 100%;\n}\n\nh1, p {\n    opacity: 0;\n}\n\np {\n    animation: fadeIn 2s forwards;\n    animation-delay: 2s;\n}\n\nh1 {\n    margin: 20px 0 10px 0;\n    animation: fadeIn 2s forwards;\n    animation-delay: 3s;\n}\n\n.buttons {\n    margin-top: 20px;\n}\n\nbutton.register {\n    background: linear-gradient(to bottom, #9A2C81, #EF1C42); /* Degradado de arriba hacia abajo */\n    color: #ffffff; /* Texto blanco */\n    border: none; /* Sin borde */\n    padding: 12px 24px; /* Espaciado interno del botón */\n    margin: 10px; /* Margen entre botones */\n    border-radius: 25px; /* Bordes redondeados */\n    cursor: pointer; /* Cambiar el cursor a mano */\n    transition: background 0.3s ease; /* Transición suave */\n    font-size: 16px; /* Tamaño de fuente */\n    width: 150px; /* Ancho fijo */\n}\n\nbutton.register:hover {\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); /* Cambiar dirección del degradado al pasar el cursor */\n}\n\nbutton.login {\n    background: linear-gradient(to bottom, #9A2C81, #EF1C42); /* Degradado de arriba hacia abajo */\n    color: #ffffff; /* Texto blanco */\n    border: none; /* Sin borde */\n    padding: 12px 24px; /* Espaciado interno del botón */\n    margin: 10px; /* Margen entre botones */\n    border-radius: 25px; /* Bordes redondeados */\n    cursor: none; /* Cambiar el cursor a mano */\n    transition: background 0.3s ease; /* Transición suave */\n    font-size: 16px; /* Tamaño de fuente */\n    width: 150px; /* Ancho fijo */\n}\n\nbutton.login:hover {\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); /* Cambiar dirección del degradado al pasar el cursor */\n}\n\n@keyframes draw {\n    from {\n        stroke-dasharray: 0, 200;\n    }\n    to {\n        stroke-dasharray: 200, 0;\n    }\n}\n\n@keyframes glow {\n    0%, 100% {\n        stroke: #ffffff;\n        filter: drop-shadow(0 0 5px #ffffff);\n    }\n    50% {\n        stroke: #ff00ff;\n        filter: drop-shadow(0 0 20px #ff00ff);\n    }\n}\n\nline {\n    stroke-dasharray: 200;\n    stroke-dashoffset: 200;\n    animation: draw 20s forwards, glow 5s infinite alternate;\n    animation-delay: var(--delay);\n}\n\n@keyframes fadeIn {\n    to {\n        opacity: 1;\n    }\n}\n\n.cursor {\n    width: 20px;\n    height: 20px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    position: absolute;\n    pointer-events: none;\n    filter: drop-shadow(0 0 5px #ffffff);\n    animation: cursorGlow 1.5s infinite alternate;\n}\n\n@keyframes cursorGlow {\n    0%, 100% {\n        transform: scale(1);\n        filter: drop-shadow(0 0 5px #ffffff);\n    }\n    50% {\n        transform: scale(1.5);\n        filter: drop-shadow(0 0 20px #ff00ff);\n    }\n}\n\n            " }} /><div className="container">
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
            </div></>

  );


}

                                                                    
            


export default Main2;