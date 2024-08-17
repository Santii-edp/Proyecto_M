import React from 'react';
import { Link } from "react-router-dom";
import backgroundGif from './images/background.gif'; // Ruta al archivo GIF


const Homeadm = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "\n                /* General body styles */\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; /* Evita barras de desplazamiento en el body */\n}\n\n/* Container for the whole app */\n.App {\n  display: flex;\n  height: 100vh;\n  position: relative; /* Asegura que el fondo cubra el área completa */\n}\n\n/* Sidebar styles */\n.sidebar {\n  width: 200px;\n  background-color: #2c2c54;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1; /* Asegura que la barra lateral esté encima del fondo */\n}\n\n.sidebar h2 {\n  color: white;\n  margin-bottom: 20px;\n}\n\n.sidebar a {\n  text-decoration: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 10px; /* Añadimos margen inferior para separación */\n}\n\n.sidebar a:hover {\n  background-color: #575fcf;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; /* Centramos verticalmente las opciones */\n  height: 100%;\n}\n\n/* Main content styles */\n.main-content {\n  margin-left: 200px;\n  padding: 20px;\n  width: calc(100% - 200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 2; /* Asegura que el contenido principal esté encima del fondo */\n  overflow: hidden;\n}\n\n/* Navigation styles */\nnav {\n  width: 100%;\n  background-color: #2c2c54;\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.search-bar-container {\n  position: relative;\n  width: 50%;\n}\n\n.search-bar {\n  width: 100%;\n  padding: 15px 40px 15px 15px; /* Espacio para la lupa */\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.search-bar-icon {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: #aaa;\n}\n\n/* Background container styles */\n.background-container {\n  width: 100%;\n  height: 100vh; /* Ajusta el tamaño para que ocupe el fondo completo */\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover; /* Asegura que el fondo cubra todo el área */\n}\n\n/* Grid styles */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 10px;\n  width: 80%;\n  margin-top: 20px;\n}\n\n.grid-item {\n  background-color: white;\n  border: 1px solid #ddd;\n  padding: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n            " }} /><div className="App">
                <div className="sidebar">
                    <h2>MegaMuebles</h2>
                    <div className="menu-container">
                        <a href="#inicio">Inicio <span>&#9654;</span></a>
                        <a href="#catalogo">Catálogo <span>&#9654;</span></a>
                        <a href="#inventario">Inventario <span>&#9654;</span></a>
                        <a href="#reportes">Reportes <span>&#9654;</span></a>
                        <a href="#usuarios">Usuarios <span>&#9654;</span></a>
                        <a href="#configuracion">Configuración <span>&#9654;</span></a>
                    </div>
                </div>
                <div className="main-content">
                    <nav>
                        <div className="search-bar-container">
                            <input type="text" placeholder="Buscar" className="search-bar" />
                            <span className="search-bar-icon">&#128269;</span> {/* Icono de lupa */}
                        </div>
                    </nav>
                    <div
                        className="background-container"
                        style={{ backgroundImage: `url(${backgroundGif})` }} // Aplica la imagen de fondo en línea
                    >
                        {/* Aquí iría el contenido */}
                    </div>
                </div>
            </div></>
    );

}



export default Homeadm;