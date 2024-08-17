import React from 'react';
import { Link } from "react-router-dom";


const Stats = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "/*google font*/\n            @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n            \n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n                font-family: \"Poppins\", sans-serif;\n            }\n            body{\n                min-height: 100%;\n                background-color: rgb(156, 153, 160);\n            }\n            nav{\n                position: fixed;\n                top: 0;\n                left: 0;\n                height: 70px;\n                width: 100%;\n                display: flex;\n                align-items: center;\n                background: rgb(30, 31, 87);\n                box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\n            }\n            nav .logo{\n                display:flex;\n                align-items: center;\n                margin: 0 24px;\n            }\n            .logo .menu-icon {\n                color: rgb(145, 139, 233);/*color del logo obvio*/\n                font-size: 24px;/*modifica el tamaño del logo*/\n                margin-right: 23px;/* separa al logo del titulo*/\n                cursor:pointer;/*cuando se acerque el cursor al logo o icono sale el pointer*/\n            \n            }\n            \n            .logo .logoname{\n                color:rgb(148, 148, 202);\n                font-size: 24px;/*tamaño titulo*/\n                font-weight: 0;/*separa supongo*/\n            }\n            nav .sidebar{\n                position: fixed;\n                top: 0;\n                left: -100%;\n                height: 100%;\n                width: 260px;\n                padding: 20px 0;\n                background-color: rgb(30, 31, 87);\n                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);/*sombras al navbar*/\n                transition: all 0.5s ease;\n            }\n            nav.open .sidebar{\n                left: 0;\n            }\n             .sidebar .sidebar-content{\n                display: flex;\n                height: 100%;\n                flex-direction: column;\n                justify-content: space-between;\n                padding: 20px 10px; /*da espacio en el div a lo largo y anche a los iconos de la lista por el sidebar*/\n            \n             }\n             .sidebar-content .list{\n                list-style: none;\n             }\n             .list .nav-link{\n                display: flex;\n                align-items: center;\n                padding: 18px 20px;\n                border-radius: 8px;/*redondear brodes*/\n                background-color:rgb(30, 31, 87);\n                text-decoration: none;/*quita decoraciones del texto por el link*/\n             }\n             .lists .nav-link:hover{\n                background-color: rgb(185, 124, 241);\n             }\n             .lists .nav-link .icon{\n                margin-right: 10px;\n                color: rgb(69, 71, 71);\n                font-weight: 400;\n             }\n            .lists .nav-link .link{\n                font-size: 16px;\n                color: rgb(117, 118, 218);\n                font-weight: 400;\n            }\n            .lists .nav-link:hover .icon,\n            .lists .nav-link:hover .link {\n                color: rgb(238, 243, 241);\n             }\n            .overlay{\n                position: fixed;\n                top: 0;\n                left: -100%;\n                height: 1000vh;\n                width: 100%;\n                opacity: 0;\n                background: rgb(0, 0, 0, 0.3);\n                transition: all 0.4s ease;\n                pointer-events: none;\n            }\n            nav.open .overlay{\n                left: 260px;\n                opacity: 1;\n                pointer-events: auto;\n            \n            }" }} /><div>
                <header>
                    <nav className="navbar bd-navbar sticky-top">
              <div className="logo">
                <i className="bx bx-menu menu-icon" />
                <span className="logoname">MegaMuebles</span>
              </div>
              <div className="search">
                <button className="btn btn-outline-" type="submit"><input className="form-control me-34" type="search" placeholder="Search" aria-label="Search" />
                </button>
              </div>
              <div className="sidebar container-fluid">
                <div className="logo">
                  <i className="bx bx-menu menu-icon" />
                  <span className="logoname">MegaMuebles</span>
                </div>
                <div className="sidebar-content">
                  <ul className="lists">
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-home-alt icon">
                          <span className="link">Home</span>
                        </i>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-money icon" />
                        <span className="link">Cash</span>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-user-circle icon" />
                        <span className="link">Acount</span>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-store icon" />
                        <span className="link">Catalog</span>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-bell icon" />
                        <span className="link">notification</span>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bxs-cart icon" />
                        <span className="link">Cart</span>
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="#" className="nav-link">
                        <i className="bx bx-heart icon" />
                        <span className="link">Like</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="bottom-cotent">
                    <ul className="lists">
                      <li className="list">
                        <Link to="#" className="nav-link">
                          <i className="bx bx-cog icon" />
                          <span className="link">Settings</span>
                        </Link>
                      </li>
                      <li className="list">
                        <Link to="#" className="nav-link">
                          <i className="bx bx-log-out icon" />
                          <span className="link">Log-Out</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <section className="overlay" />
                    <h1 id="titulo">Muebles populares</h1>
                </header>
                <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            background-color: #140018; /* Fondo morado */\n        }\n        #titulo {\n            text-align: center;\n            color: #fff; /* Texto blanco */\n        }\n    " }} />
                <header>
                    <button id="boton-reportes">Reportes</button>
                </header>
                <style dangerouslySetInnerHTML={{ __html: "\n    body {\n        background-color: #1b0120; /* Fondo morado */\n    }\n    #titulo {\n        text-align: center;\n        color: #fff; /* Texto blanco */\n    }\n    #boton-reportes {\n        background-color: #808080; /* Fondo gris */\n        color: #fff; /* Texto blanco */\n        border: none;\n        padding: 10px 40px; /* Aumentamos el padding horizontal para hacerlo más ancho */\n        font-size: 16px;\n        cursor: pointer;\n        display: block; /* Convertimos el botón en un elemento de bloque para centrarlo */\n        margin: 20px auto; /* Centramos el botón horizontalmente */\n        width: 50%; /* Establecemos un ancho del 50% para que sea más ancho */\n    }\n    #boton-reportes:hover {\n        background-color: #666; /* Fondo gris oscuro al pasar el mouse */\n    }\n" }} />
                <header>
                    <div id="categorias">
                        <h2>Mesas</h2> <h2>sofas</h2> <h2>juegos de sala</h2>
                    </div>
                </header>
                <style dangerouslySetInnerHTML={{ __html: "\n    body {\n        background-color: #18011d; /* Fondo morado */\n    }\n    #titulo {\n        text-align: center;\n        color: #fff; /* Texto blanco */\n    }\n    #boton-reportes {\n        background-color: #808080; /* Fondo gris */\n        color: #fff; /* Texto blanco */\n        border: none;\n        padding: 10px 40px; /* Aumentamos el padding horizontal para hacerlo más ancho */\n        font-size: 16px;\n        cursor: pointer;\n        display: block; /* Convertimos el botón en un elemento de bloque para centrarlo */\n        margin: 20px auto; /* Centramos el botón horizontalmente */\n        width: 50%; /* Establecemos un ancho del 50% para que sea más ancho */\n    }\n    #boton-reportes:hover {\n        background-color: #666; /* Fondo gris oscuro al pasar el mouse */\n    }\n    #categorias {\n        text-align: center; /* Centramos los títulos horizontalmente */\n        margin-top: 40px; /* Agregamos un margen superior para separar los títulos del botón */\n    }\n    #categorias h2 {\n        display: inline-block; /* Convertimos los títulos en elementos de bloque en línea para que estén en la misma línea */\n        margin: 0 20px; /* Agregamos un margen horizontal para separar los títulos */\n        font-size: 18px; /* Ajustamos el tamaño de fuente de los títulos */\n        color: #fff; /* Texto blanco */\n        \n    }\n" }} />
                <div id="imagenes" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="http://127.0.0.1:3005/imagenes/img5.webp" alt="Imagen izquierda" width={300} height={200} style={{ position: 'absolute', left: 0, marginLeft: 20 }} />
                    <img src="http://127.0.0.1:3005/imagenes/img1.jpeg" alt="Mesa" width={100} height={100} />
                    <img src="http://127.0.0.1:3005/imagenes/img2.jpeg" alt="Silla" width={100} height={100} />
                    <img src="http://127.0.0.1:3005/imagenes/img3.webp" alt="Juego de sala" width={100} height={100} />
                    <img src="http://127.0.0.1:3005/imagenes/img5.webp" alt="Imagen derecha" width={300} height={200} style={{ position: 'absolute', right: 0, marginRight: 20 }} />
                </div>
                <div id="imagenes">
                    <img src="http://127.0.0.1:3005/imagenes/img41.webp" alt="porcentaje1" width={100} height={100} />
                    <img src="http://127.0.0.1:3005/imagenes/img10.webp" alt="porcentaje2" width={100} height={100} />
                    <img src="http://127.0.0.1:3005/imagenes/img99.webp" alt="porcentaje3" width={100} height={100} />
                </div>
                <div id="imagenes">
                    <img src="http://127.0.0.1:3005/imagenes/img6.png" alt="clientes" width={300} height={100} />
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n    body {\n        background-color: #1c0022; /* Fondo morado */\n    }\n    #titulo {\n        text-align: center;\n        color: #fff; /* Texto blanco */\n    }\n    #boton-reportes {\n        background-color: #808080; /* Fondo gris */\n        color: #fff; /* Texto blanco */\n        border: none;\n        padding: 10px 40px; /* Aumentamos el padding horizontal para hacerlo más ancho */\n        font-size: 16px;\n        cursor: pointer;\n        display: block; /* Convertimos el botón en un elemento de bloque para centrarlo */\n        margin: 20px auto; /* Centramos el botón horizontalmente */\n        width: 50%; /* Establecemos un ancho del 50% para que sea más ancho */\n    }\n    #boton-reportes:hover {\n        background-color: #666; /* Fondo gris oscuro al pasar el mouse */\n    }\n    #categorias {\n        text-align:center; /* Centramos los títulos horizontalmente */\n        margin-top: 40px; /* Agregamos un margen superior para separar los títulos del botón */\n    }\n    #categorias h2 {\n        display:inline-block; /* Convertimos los títulos en elementos de bloque en línea para que estén en la misma línea */\n        margin: 0 40px; /* Agregamos un margen horizontal para separar los títulos */\n        font-size: 20px; /* Ajustamos el tamaño de fuente de los títulos */\n        color: #fff; /* Texto blanco */\n    }\n    #imagenes {\n        text-align: center; /* Centramos las imágenes horizontalmente */\n        margin-top: 40px; /* Agregamos un margen superior para separar las imágenes de los títulos */\n    }\n    #imagenes img {\n        margin: 0 40px; /* Agregamos un margen horizontal para separar las imágenes */\n        border-radius: 10px; /* Agregamos un borde redondeado a las imágenes */\n    }\n" }} />
            </div></>
    );

}



export default Stats;