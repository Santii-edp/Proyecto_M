import React from 'react';
import { Link } from "react-router-dom";

const Shopping = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "\n                h2 {\n    color: #ffffff; /* Cambia el color del título */\n  }\n  /* Estilos para el boton de búsqueda */\n.search-container {\n    position: absolute; /* coloca el boton en la esquina superior derecha */\n    top: 10px; /* Distancia desde la parte superior */\n    right: 10px; /* Distancia desde la parte derecha */\n    display: flex; /* Establece un layout flexible */\n    align-items: center; /* Centra los elementos verticalmente */\n  }\n  \n  /* Estilos para el input de búsqueda */\n  #search-input {\n    padding: 10px 30px 10px 10px; /* Agrega un espacio entre el texto y el borde del input */\n    border: none; /* Quita el borde del input */\n    border-radius: 20px; /* Agrega un borde redondeado al input */\n    font-size: 16px; /* Tamaño del texto del input */\n    background-color: #ffffff; /* Fondo blanco */\n    padding-right: 30px; \n  }\n  \n  /* Estilos para la lupa */\n  .search-icon {\n    position: absolute; /* Posiciona la lupa dentro del input */\n    right: 10px; /* Distancia desde la parte derecha */\n    top: 50%; /* Centra la lupa verticalmente */\n    transform: translateY(-50%); /* Centra la lupa verticalmente */\n    font-size: 16px; /* Tamaño de la lupa */\n    color: #911515; /* Color de la lupa */\n  }\n  \n  .search-icon::before {\n    font-family: \"Font Awesome 5 Free\"; /* Utiliza la fuente de Font Awesome */\n    content: \"\\f002\"; /* Código de la lupa */\n  }\n  /* Estilos para el botón \"Ver carrito\" */\n.cart-button {\n    background-color: #007bff; /* Fondo azul */\n    color: #ffffff; /* Texto blanco */\n    padding: 10px 20px; /* Agrega un espacio entre el texto y el borde del botón */\n    border: none; /* Quita el borde del botón */\n    border-radius: 20px; /* Agrega un borde redondeado al botón */\n    cursor: pointer; /* Cambia el cursor a una mano */\n  }\n  \n  .cart-button:hover {\n    background-color: #353738; /* Fondo azul oscuro al pasar el cursor */\n  }\n  \n  /* Estilos para el botón \"Total\" */\n  .total-button {\n    background-color: #ff9900; /* Fondo naranja */\n    color: #ffffff; /* Texto blanco */\n    padding: 10px 20px; /* Agrega un espacio entre el texto y el borde del botón */\n    border: none; /* Quita el borde del botón */\n    border-radius: 0 20px 20px 0; /* Agrega un borde redondeado solo al lado derecho */\n    cursor: pointer; /* Cambia el cursor a una mano */\n  }\n  \n  .total-button:hover {\n    background-color: #020202; /* Fondo naranja oscuro al pasar el cursor */\n  }\n  /* Estilos para el de los botones */\n.button-container {\n    position: absolute; /* Posiciona el boton en la esquina inferior derecha */\n    bottom: 10px; /* Distancia desde la parte inferior */\n    right: 10px; /* Distancia desde la parte derecha */\n    display: flex; /* Establece un layout flexible */\n    align-items: center; /* es para centrar vertical los botones:D */\n  }\n  \n  /* Estilos para el botón \"Ver carrito\" */\n  .cart-button {\n    background-color: #ffffff; /* Fondo azul */\n    color: #080808; /* Texto blanco */\n    padding: 8px 20px; /* Agrega un espacio entre el texto y el borde del botón */\n    border: none; /* Quita el borde del botón */\n    border-radius: 20px 0 0 20px; /* Agrega un borde redondeado solo al lado izquierdo */\n    cursor: pointer; /* Cambia el cursor a una mano */\n  }\n  \n  .cart-button:hover {\n    background-color: #303233; /* Fondo azul oscuro al pasar el cursor */\n  }\n  \n  /* Estilos para el botón \"Total\" */\n  .total-button {\n    background-color: #df0239; /* Fondo naranja */\n    color: #ffffff; /* Texto blanco */\n    padding: 10px 20px; /* Agrega un espacio entre el texto y el borde del botón */\n    border: none; /* Quita el borde del botón */\n    border-radius: 0 20px 20px 0; /* Agrega un borde redondeado solo al lado derecho */\n    cursor: pointer; /* Cambia el cursor a una mano */\n  }\n  \n  .total-button:hover {\n    background-color: #02b91b; /* Fondo naranja oscuro al pasar el cursor */\n  }\n  \n  /* Estilos para que los botones estén pegados */\n  .cart-button + .total-button {\n    margin-left: -10px; /* Quita el espacio entre los botones */\n  }\n            " }} /><div>
                <style dangerouslySetInnerHTML={{ __html: "\n            body {\n                background-color: #140018; /* Fondo morado */\n            }\n        " }} />
                <div className="container">
                    <div className="imagen-contenedor">
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img11.webp" alt="Imagen izquierda" className="imagen-izquierda" />
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img1.png" alt="Imagen 1" />
                        <div className="imagen-info">
                            <h2>Sofa cama</h2>
                            <button className="boton">Pranna color (perla, blanco nieve)</button>
                            <button className="boton">Ancho: 83cm Alto: 85cm.</button>
                        </div>
                    </div>
                    <div className="imagen-contenedor">
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img11.webp" alt="Imagen izquierda 2" className="imagen-izquierda" />
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img2.webp" alt="Imagen 2" />
                        <div className="imagen-info">
                            <h2>Sofa de cuero</h2>
                            <button className="boton">Amarillo natura, café liso habano</button>
                            <button className="boton">Ancho: 200 / 240 cm x Alto: 66 cm </button>
                        </div>
                    </div>
                    <div className="imagen-contenedor">
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img11.webp" alt="Imagen izquierda 3" className="imagen-izquierda" />
                        <img src="http://127.0.0.1:3001/interfazcarritoc/imagenes/img3.png" alt="Imagen 3" />
                        <div className="imagen-info">
                            <h2>Sala comedor 6 puestos</h2>
                            <button className="boton">Madera de raulí completamente maciza</button>
                            <button className="boton">Ancho: 150 cm x Alto: 90 cm</button>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n           .container {\n                display: flex; /* Establece un layout flexible */\n                flex-wrap: wrap; /* Permite que los elementos se ajusten en varias líneas */\n            }\n    \n           .imagen-contenedor {\n                display: flex; /* Establece un layout flexible */\n                align-items: center; /* Centra los elementos verticalmente */\n                margin-bottom: 20px; /* Agrega un espacio entre las imágenes */\n            }\n    \n           .imagen-izquierda {\n                width: 2%; /* Establece el ancho de la imagen izquierda al 20% del contenedor */\n                margin-right: 10px; /* Agrega un espacio entre la imagen izquierda y la imagen principal */\n            }\n    \n           .imagen-contenedor img:not(.imagen-izquierda) {\n                width: 16%; /* Establece el ancho de la imagen principal al 40% del contenedor */\n                border-radius: 100px; /* Agrega un borde redondeado a la imagen principal */\n                margin-right: 20px; /* Agrega un espacio entre la imagen principal y la información */\n            }\n    \n           .imagen-info {\n                width: 40%; /* Establece el ancho de la información al 40% del contenedor */\n            }\n    \n           .boton {\n                background-color: #ffffff; /* Fondo verde */\n                color: #080808; /* Texto blanco */\n                padding: 10px 10px; /* Agrega un espacio entre el texto y el borde del botón */\n                border: none; /* Quita el borde del botón */\n                border-radius: 20px; /* Agrega un borde redondeado al botón */\n                cursor: pointer; /* Cambia el cursor a una mano */\n            }\n    \n           .boton:hover {\n                background-color: #3e8e41; \n            }\n        " }} />
                <div className="search-container">
                    <input type="search" id="search-input" placeholder="Buscar..." />
                    <span className="search-icon" />
                </div>
                <div className="button-container">
                    <button className="cart-button">✅Todos</button>
                    <button className="total-button">Total:$1.200.450</button>
                </div>
            </div></>


    );

}



export default Shopping;