import React from 'react';
import { Link } from "react-router-dom";

const Regadmin = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "\n                body {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    background: linear-gradient(to bottom, #353333, #353435);\n    color: white;\n    position: relative;\n}\n\nbody::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 300%;\n    height: 98%;\n    background: url('http://127.0.0.1:3007/background.jpg') center/cover no-repeat;\n    z-index: -1;\n    animation: slideBackground 100s linear infinite;\n    opacity: 0.5; /* Reduce contraste del fondo */\n}\n\nbody::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); /* Capa semi-transparente negra para reducir contraste */\n    z-index: 0;\n}\n\n@keyframes slideBackground {\n    0% { transform: translateX(0); }\n    33% { transform: translateX(-33.33%); }\n    66% { transform: translateX(-66.66%); }\n    100% { transform: translateX(0); }\n}\n\n.container, .create-account-container {\n    background: rgba(0, 0, 0, 0.8);\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n    width: 320px;\n    text-align: center;\n    position: relative;\n    z-index: 1;\n}\n\n.logo-preview {\n    width: 100px;\n    height: 100px;\n    margin-bottom: -20px;\n}\n\n.file-label {\n    color: #ccc;\n    cursor: pointer;\n    display: block;\n    margin-bottom: 10px;\n}\n\n.file-label:hover {\n    color: white;\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"password\"] {\n    width: calc(100% - 22px);\n    padding: 10px;\n    margin: 10px 0;\n    border: none;\n    border-bottom: 2px solid white;\n    background: transparent;\n    color: white;\n    outline: none;\n    transition: border-bottom 0.3s ease;\n}\n\ninput[type=\"text\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"password\"]:focus {\n    border-bottom: 2px solid #9A2C81;\n}\n\ninput[type=\"submit\"] {\n    width: 100%;\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); \n    color: white;\n    cursor: pointer;\n    margin-top: 10px;\n    transition: background 0.3s ease;\n}\n\ninput[type=\"submit\"]:hover {\n    background: linear-gradient(to bottom, #9A2C81, #EF1C42);\n}\n\nlabel {\n    display: block;\n    margin-top: 10px;\n    text-align: left;\n}\n\ninput[type=\"checkbox\"] {\n    margin-right: 10px;\n}\n\n.terms-link {\n    color: #6200ea;\n}\n\n.terms-content {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #333;\n    padding: 20px;\n    border-radius: 10px;\n    max-width: 500px;\n    width: 90%;\n    color: white;\n    z-index: 2; /* Asegúrate de que el contenido emergente esté por encima del fondo */\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n}\n\n.terms-content h2 {\n    margin-top: 0;\n}\n\n.terms-scrollable-content {\n    max-height: 500px; \n    overflow-y: auto;\n    margin-top: 10px;\n}\n\n#closeTermsButton {\n    margin-top: 20px;\n    padding: 10px 20px;\n    background-color: #6200ea;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    cursor: pointer;\n}\n\n.admin-link,\n.create-account-link ,\n.forgot-password-link{\n    color: #6200ea;\n    display: inline-block;\n    margin: 10px 0;\n}\n\n.forgot-password-link:hover,\n.admin-link:hover,\n.create-account-link:hover {\n    text-decoration: underline;\n}\n\n\n            " }} /><div className="container">
                <img id="logoPreview" src="http://127.0.0.1:3007/lg-removebg-preview.png" alt="Logo" className="logo-preview" />
                <h1>MegaMuebles</h1>
                <h2>Administrador</h2>
                <p>¡Bienvenido al panel de administración!</p>
                <form id="adminLoginForm">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="adminPassword">Contraseña administrador:</label>
                    <input type="password" id="adminPassword" name="adminPassword" required />
                    <input type="submit" defaultValue="Acceder" />
                </form>
                <p><a href="login.html" className="back-to-login">Volver al inicio</a></p>
            </div></>

    );

}



export default Regadmin;