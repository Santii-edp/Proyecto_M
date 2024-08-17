import React from 'react';
import { Link } from "react-router-dom";

const Producto = () => {
        return (
          <><style dangerouslySetInnerHTML={{ __html: "\n            /*google font*/\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n}\nbody{\n    min-height: 100%;\n    background-color: rgb(156, 153, 160);\n}\nnav{\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 70px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    background: rgb(30, 31, 87);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\n}\nnav .logo{\n    display:flex;\n    align-items: center;\n    margin: 0 24px;\n}\n.logo .menu-icon {\n    color: rgb(145, 139, 233);/*color del logo obvio*/\n    font-size: 24px;/*modifica el tamaño del logo*/\n    margin-right: 23px;/* separa al logo del titulo*/\n    cursor:pointer;/*cuando se acerque el cursor al logo o icono sale el pointer*/\n\n}\n\n.logo .logoname{\n    color:rgb(148, 148, 202);\n    font-size: 24px;/*tamaño titulo*/\n    font-weight: 0;/*separa supongo*/\n}\nnav .sidebar{\n    position: fixed;\n    top: 0;\n    left: -100%;\n    height: 100%;\n    width: 260px;\n    padding: 20px 0;\n    background-color: rgb(30, 31, 87);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);/*sombras al navbar*/\n    transition: all 0.5s ease;\n}\nnav.open .sidebar{\n    left: 0;\n}\n .sidebar .sidebar-content{\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px 10px; /*da espacio en el div a lo largo y anche a los iconos de la lista por el sidebar*/\n\n }\n .sidebar-content .list{\n    list-style: none;\n }\n .list .nav-link{\n    display: flex;\n    align-items: center;\n    padding: 18px 20px;\n    border-radius: 8px;/*redondear brodes*/\n    background-color:rgb(30, 31, 87);\n    text-decoration: none;/*quita decoraciones del texto por el link*/\n }\n .lists .nav-link:hover{\n    background-color: rgb(185, 124, 241);\n }\n .lists .nav-link .icon{\n    margin-right: 10px;\n    color: rgb(69, 71, 71);\n    font-weight: 400;\n }\n.lists .nav-link .link{\n    font-size: 16px;\n    color: rgb(117, 118, 218);\n    font-weight: 400;\n}\n.lists .nav-link:hover .icon,\n.lists .nav-link:hover .link {\n    color: rgb(238, 243, 241);\n }\n.overlay{\n    position: fixed;\n    top: 0;\n    left: -100%;\n    height: 1000vh;\n    width: 100%;\n    opacity: 0;\n    background: rgb(0, 0, 0, 0.3);\n    transition: all 0.4s ease;\n    pointer-events: none;\n}\nnav.open .overlay{\n    left: 260px;\n    opacity: 1;\n    pointer-events: auto;\n\n}\n\n/* estilos anteriores*/\nhr {\n    color: aliceblue;\n    \n}\ndiv.producto{\n    transform: translate(0pc,3pc);\n    height: 550px;\n    width: 100%;\n    background-color: #36313f;\n    padding: 30px 30px;\n    color: rgb(0, 0, 0);\n}\ndiv#imagen-producto {\n    transform: translate(10pc, -1pc);\n    width: 28pc;\n    height: 25pc;\n    background-color: #560366;\n\n}\ndiv#info-producto {\n    font-family:cursive;\n    transform: translate(40pc, -26pc);\n    width: 41pc;\n    height: 27pc;\n    background-color: rgb(22, 52, 52);\n    border-radius: 10px;\n}\ndiv#info-producto p {\n    transform: translate(-17pc, -2pc);\n\n\n}\n\ndiv.producto p {\n    color: rgb(191, 172, 172);\n    position: absolute;\n    top: 6pc;\n    left: 20pc;\n}\ndiv#visually-hidden{\n    color: #140e16;\n}\n\n\ndiv#Productos {\n    transform: translate(0pc, 6pc);\n\n    background-color:  rgb(242, 228, 202);\n    \n}\n\ndiv#info-producto div.product-card {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding: 20px 30px;\n    background-color: white;\n    border: 4px solid #eed1a6;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    \n\n}\n\n.product-title {\n    font-variant: small-caps slashed-zero;\n    font-family: Georgia, serif;\n    transform: translate(1pc, 1pc);\n    font-size: 1.2em;\n    margin-bottom: 12px;\n}\n\nbutton#favoritos-prod{\n    transform: translate(19pc,-6.4pc);\n}\n\ndiv p.producto-descripcion {\n    font-size: 1.1em;\n    top: 8pc;\n    margin-bottom: 20px;\n    color: #666;\n}\n\ndiv p.product-price {\n    position: absolute;\n    top: 14pc;\n    left: 23pc;\n    color: #140e16;\n    font-size: 1.3em;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\nsvg.icon-dinero{\n\ntransform: translate(-5pc, -1.2pc);\n}\n\n.product-button {\n    width: 7pc;\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n    transform: translate(-14pc, 9pc);\n    background: linear-gradient(to bottom, #EF1C42, #9A2C81); \n    color: white;\n    cursor: pointer;\n    margin-top: 5px;\n    transition: background 0.3s ease;\n}\nproduct-button {\n    background-color: #242424;\n    color: white;\n    border: none;\n    position: absolute;\n    top: 23pc;\n    left: 4pc;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1em;\n    transition: background-color 0.3s ease;\n}\n\n\nhr.titulo-prod{\n    transform: translate(-3.9pc, -7pc) ;\n    color: #140e16;\n    padding: 26px 17pc;\n\n}\nhr.texto-prod{\n    color: #0b172f;\n    padding: 27px 17pc;\n    position: absolute;\n    left: 2pc;\n    top: 20pc;\n    \n    \n}\n.footer {\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 20px 0;\n    bottom: 0;\n    width: 100%;\n}\n.footer a {\n    color: #ffffff;\n    text-decoration: none;\n    margin: 0 10px;\n}\n.footer a:hover {\n    text-decoration: underline;\n}\n          " }} /><div>
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


            <div className="producto">
              <hr /> <br />
              <div id="imagen-producto">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"><img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-beige__1160283_pe888836_s5.jpg?f=s" className="d-block w-100" alt="..." /></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2"><img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-gris-oscuro__0955959_pe804389_s5.jpg?f=s" className="d-block w-100" alt="..." /></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3"><img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-beige__1015254_pe829957_s5.jpg?f=s" className="d-block w-100" alt="..." /></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                      <img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-beige__1160283_pe888836_s5.jpg?f=s" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Silla Beige</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                      <img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-gris-oscuro__0955959_pe804389_s5.jpg?f=s" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Silla Negra</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.ikea.com/co/es/images/products/mullfjaellet-silla-sala-reuniones-con-ruedas-naggen-beige__1015254_pe829957_s5.jpg?f=s" className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Medidas Generales</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div id="info-producto">
                <div className="product-card">
                  <h2 className="product-title">Nombre del Producto </h2>
                  <button id="favoritos-prod" type="button" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg></button>
                  <hr className="titulo-prod" /><br />
                  <p className="producto-descripcion">Esta es una breve descripción del producto. Incluye detalles importantes y atractivos.</p><hr className="texto-prod" />
                  <svg className="icon-dinero" xmlns="http://www.w3.org/2000/svg" width={235} height={44} fill="currentColor" viewBox="0 0 26 16">
                    <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                    <p className="product-price">$99.99</p></svg>
                  <button className="product-button">Comprar Ahora</button>
                </div>
              </div>
            </div>
            <div id="Productos">
            </div>
            <footer>
              <div className="footer">
                <p>© Furnitapp. Todos los derechos reservados.</p>
                <p>
                  <Link to="#sobre-nosotros">Sobre Nosotros</Link>
                  <Link to="#contacto">Contacto</Link>
                  <Link to="#privacidad">Política de Privacidad</Link>
                </p>
              </div></footer>
          </div></>
    );

  const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

        menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });   
});

overlay.addEventLitener("click",() => {
    navBar.classList.remove("open");
});


}


export default Producto;