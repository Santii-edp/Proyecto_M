import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "body {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                height: 100vh;\n                margin: 0;\n                overflow: hidden;\n                background: linear-gradient(to bottom, #353333, #353435);\n                color: white;\n                position: relative;\n            }\n            \n            body::before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 300%;\n                height: 98%;\n                background: url('http://127.0.0.1:3007/background.jpg') center/cover no-repeat;\n                z-index: -1;\n                animation: slideBackground 100s linear infinite;\n                opacity: 0.5; /* Reduce contraste del fondo */\n            }\n            \n            body::after {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background: rgba(0, 0, 0, 0.5); /* Capa semi-transparente negra para reducir contraste */\n                z-index: 0;\n            }\n            \n            @keyframes slideBackground {\n                0% { transform: translateX(0); }\n                33% { transform: translateX(-33.33%); }\n                66% { transform: translateX(-66.66%); }\n                100% { transform: translateX(0); }\n            }\n            \n            .container, .create-account-container {\n                background: rgba(0, 0, 0, 0.8);\n                padding: 20px;\n                border-radius: 10px;\n                box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n                width: 320px;\n                text-align: center;\n                position: relative;\n                z-index: 1;\n            }\n            \n            .logo-preview {\n                width: 100px;\n                height: 100px;\n                margin-bottom: -20px;\n            }\n            \n            .file-label {\n                color: #ccc;\n                cursor: pointer;\n                display: block;\n                margin-bottom: 10px;\n            }\n            \n            .file-label:hover {\n                color: white;\n            }\n            \n            input[type=\"text\"],\n            input[type=\"email\"],\n            input[type=\"password\"] {\n                width: calc(100% - 22px);\n                padding: 10px;\n                margin: 10px 0;\n                border: none;\n                border-bottom: 2px solid white;\n                background: transparent;\n                color: white;\n                outline: none;\n                transition: border-bottom 0.3s ease;\n            }\n            \n            input[type=\"text\"]:focus,\n            input[type=\"email\"]:focus,\n            input[type=\"password\"]:focus {\n                border-bottom: 2px solid #9A2C81;\n            }\n            \n            input[type=\"submit\"] {\n                width: 100%;\n                padding: 10px;\n                border: none;\n                border-radius: 5px;\n                background: linear-gradient(to bottom, #EF1C42, #9A2C81); \n                color: white;\n                cursor: pointer;\n                margin-top: 10px;\n                transition: background 0.3s ease;\n            }\n            \n            input[type=\"submit\"]:hover {\n                background: linear-gradient(to bottom, #9A2C81, #EF1C42);\n            }\n            \n            label {\n                display: block;\n                margin-top: 10px;\n                text-align: left;\n            }\n            \n            input[type=\"checkbox\"] {\n                margin-right: 10px;\n            }\n            \n            .terms-link {\n                color: #6200ea;\n            }\n            \n            .terms-content {\n                display: none;\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                background-color: #333;\n                padding: 20px;\n                border-radius: 10px;\n                max-width: 500px;\n                width: 90%;\n                color: white;\n                z-index: 2; /* Asegúrate de que el contenido emergente esté por encima del fondo */\n                box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n            }\n            \n            .terms-content h2 {\n                margin-top: 0;\n            }\n            \n            .terms-scrollable-content {\n                max-height: 500px; \n                overflow-y: auto;\n                margin-top: 10px;\n            }\n            \n            #closeTermsButton {\n                margin-top: 20px;\n                padding: 10px 20px;\n                background-color: #6200ea;\n                border: none;\n                border-radius: 5px;\n                color: white;\n                cursor: pointer;\n            }\n            \n            .admin-link,\n            .create-account-link ,\n            .forgot-password-link{\n                color: #6200ea;\n                display: inline-block;\n                margin: 10px 0;\n            }\n            \n            .forgot-password-link:hover,\n            .admin-link:hover,\n            .create-account-link:hover {\n                text-decoration: underline;\n            }\n            \n            " }} /><><style dangerouslySetInnerHTML={{ __html: "\n                body {\n    background-color: #221B32;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    cursor: pointer;\n    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(300, 300, 300, 0.1) 1px, transparent 0.1px);\n    background-size: 50px 50px;\n}\n\n.container {\n    text-align: center;\n}\n\n#logo {\n    width: 200px;\n    height: 200px;\n    margin: 0 auto 20px auto;\n    position: relative;\n}\n\nsvg {\n    width: 100%;\n    height: 100%;\n}\n\nh1, p {\n    opacity: 0;\n}\n\np {\n    animation: fadeIn 2s forwards;\n    animation-delay: 3s;\n}\n\nh1 {\n    margin: 20px 0 10px 0;\n    animation: fadeIn 2s forwards;\n    animation-delay: 8s;\n}\n\n.buttons {\n    margin-top: 20px;\n}\n\nbutton.register {\n    background: linear-gradient(to bottom, #9A2C81, #EF1C42); /* Degradado de arriba hacia abajo */\n    color: #ffffff; /* Texto blanco */\n    border: none; /* Sin borde */\n    padding: 12px 24px; /* Espaciado interno del botón */\n    margin: 10px; /* Margen entre botones */\n    border-radius: 25px; /* Bordes redondeados */\n    cursor: pointer; /* Cambiar el cursor a mano */\n    transition: background 0.3s ease; /* Transición suave */\n    font-size: 16px; /* Tamaño de fuente */\n    width: 150px; /* Ancho fijo */\n}\n\nbutton.register:hover {\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); /* Cambiar dirección del degradado al pasar el cursor */\n}\n\nbutton.login {\n    background: linear-gradient(to bottom, #9A2C81, #EF1C42); /* Degradado de arriba hacia abajo */\n    color: #ffffff; /* Texto blanco */\n    border: none; /* Sin borde */\n    padding: 12px 24px; /* Espaciado interno del botón */\n    margin: 10px; /* Margen entre botones */\n    border-radius: 25px; /* Bordes redondeados */\n    cursor: pointer; /* Cambiar el cursor a mano */\n    transition: background 0.3s ease; /* Transición suave */\n    font-size: 16px; /* Tamaño de fuente */\n    width: 150px; /* Ancho fijo */\n}\n\nbutton.login:hover {\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); /* Cambiar dirección del degradado al pasar el cursor */\n}\n\n@keyframes draw {\n    from {\n        stroke-dasharray: 0, 200;\n    }\n    to {\n        stroke-dasharray: 200, 0;\n    }\n}\n\n@keyframes glow {\n    0%, 100% {\n        stroke: #ffffff;\n        filter: drop-shadow(0 0 5px #ffffff);\n    }\n    50% {\n        stroke: #ff00ff;\n        filter: drop-shadow(0 0 20px #ff00ff);\n    }\n}\n\nline {\n    stroke-dasharray: 200;\n    stroke-dashoffset: 200;\n    animation: draw 2s forwards, glow 1.5s infinite alternate;\n    animation-delay: var(--delay);\n}\n\n@keyframes fadeIn {\n    to {\n        opacity: 1;\n    }\n}\n\n.cursor {\n    width: 20px;\n    height: 20px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    position: absolute;\n    pointer-events: none;\n    filter: drop-shadow(0 0 5px #ffffff);\n    animation: cursorGlow 1.5s infinite alternate;\n}\n\n@keyframes cursorGlow {\n    0%, 100% {\n        transform: scale(1);\n        filter: drop-shadow(0 0 5px #ffffff);\n    }\n    50% {\n        transform: scale(1.5);\n        filter: drop-shadow(0 0 20px #ff00ff);\n    }\n}\n\n            " }} /><div className="container">
                <div classname="container">
                    <img id="logoPreview" src="http://127.0.0.1:3007/lg-removebg-preview.png" alt="Logo" classname="logo-preview" />
                    <h1>MegaMuebles</h1>
                    <h2>Iniciar sesión</h2>
                    <p>¡Bienvenido!, es un placer verte de nuevo.</p>
                    <form id="loginForm">
                        <label htmlfor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlfor="contraseña">Contraseña:</label>
                        <input type="password" id="password" name="password" required />
                        <input type="submit" defaultvalue="Acceder" />
                        <p><a href="forgot_password.html" classname="forgot-password-link">¿Olvidaste tu contraseña?</a></p>
                    </form>
                    <p><a href="administrador.html" classname="admin-link">Administrador</a></p>
                    <p>¿No tienes una cuenta? <a href="create_account.html" classname="create-account-link">Crear cuenta</a></p>
                </div>
            </div></></>

    );

}



export default Register;