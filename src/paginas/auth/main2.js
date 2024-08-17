import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import "../estilos/StyleM.css"




const Main2 = () => {

    useEffect(() => {
        const navBar = document.querySelector("nav");
        const menuBtns = document.querySelectorAll(".menu-icon");
        const overlay = document.querySelector(".overlay");
    
        const toggleNavBar = () => {
          navBar.classList.toggle("open");
        };
    
        const closeNavBar = () => {
          navBar.classList.remove("open");
        };
    
        if (navBar && menuBtns && overlay) {
          menuBtns.forEach((menuBtn) => {
            menuBtn.addEventListener("click", toggleNavBar);
          });
    
          overlay.addEventListener("click", closeNavBar);
        }
    
        // Cleanup: remover los event listeners cuando el componente se desmonte
        return () => {
          menuBtns.forEach((menuBtn) => {
            menuBtn.removeEventListener("click", toggleNavBar);
          });
    
          overlay.removeEventListener("click", closeNavBar);
        };
      }, []);
        return (

           <div>
  <nav>
    <div className="logo">
      <i className="bx bx-menu menu-icon" />
      <span className="logoform">                    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
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
        </svg></span>
      <span className="logoname">MegaMuebles</span>
    </div>
    <ul className="list_nav">
      <li className="list">
        <a href="#" className="nav-link">
          <i className="bx bx-store icon" />                                    
        </a>
      </li>
      <li className="list">
        <a href="#" className="nav-link">
          <i className="bx bxs-cart icon" />                                    
        </a>
      </li>
      <li className="list">
        <a href="#" className="nav-link">
          <i className="bx bx-user-circle icon" />                                    
        </a>
      </li>
    </ul>
    <div className="sidebar">
      <div className="logo">
        <i className="bx bx-menu menu-icon" />
        <span className="logoform"><svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
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
          </svg></span>
        <span className="logoname">MegaMuebles</span>
      </div>
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-home-alt icon">
                <span className="link">Inicio</span>
              </i>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-money icon" />                                    
              <span className="link">Dinero</span>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-store icon" />                                    
              <span className="link">Catalogo</span>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-bell icon" />                                    
              <span className="link">Notificaciones</span>
            </a>
          </li>                        
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bxs-cart icon" />                                    
              <span className="link">Carrito</span>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-heart icon" />                                    
              <span className="link">Favoritas</span>
            </a>
          </li>
        </ul>
        <div className="bottom-cotent">
          <ul className="lists">
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-cog icon" />                                    
                <span className="link">Configuraciones</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-log-out icon" />                                    
                <span className="link">Cerrar Sesion</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <section className="overlay" />
  <div className="container logo_ndx">
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
  {/*AQUI IRAN EJEMPLOS DEL CATALOGO */}
  <div className="product_ndx">
    <p>CATALOGO</p>
  </div>
</div>

  );


}

                                                                    
export default Main2;