import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
        return (
            <><style dangerouslySetInnerHTML={{ __html: "\n                body {\n    font-family: Arial, sans-serif;\n    background-color: rgb(242, 228, 202); \n}\n\nnav {\n    background-color: #190a37;\n    overflow: hidden;\n    text-align: center;\n    height: 4.2pc;\n}\nnav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    position: absolute;\n    top: 0.45pc;\n    left: 18.7pc;\n    \n}\nnav ul li {\n    float: left;\n}\nnav ul li a {\n    display: block;\n    color: rgb(252, 249, 255);\n    text-align: center;\n    padding: 14px 20px;\n    text-decoration: none;\n}\nnav ul li button#config1{\n    position:absolute;\n    top: 0.45pc;\n}\nnav ul li a#drop1{\n    color: #620475;\n\n\n}\nnav ul li a#drop1:hover{\n    color: #371f3c;\n  background-color: antiquewhite;\n\n}\nnav ul.dropdown-menu{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\nnav ul li a:hover {\n    background-color: #560366;\n  \n}\nhr {\n    color: aliceblue;\n    \n}\ndiv.contenedor{\n    transform: translate(0pc,3pc);\n    height: 550px;\n    background-color: #36313f;\n    padding: 30px 30px;\n    color: rgb(0, 0, 0);\n}\ndiv.empleados{\n    width: 40pc;\n}\ndiv.viewerEm{\n    transform: translate(50pc, -22pc);\n    width: 47pc;\n    height: 20pc;\n    background-color: aliceblue;\n    border-radius: 20px;\n}\n\ndiv img#usuario1{\n\n    width: 20pc;\n}\n\n\n\n            " }} /><div>
                <nav className="navegacion">
                    <ul>
                        <li><Link to="#home">Inicio</Link></li>
                        <li><Link to="#about">Sobre Nosotros</Link></li>
                        <li><Link to="#services">Servicios</Link></li>
                        <li><Link to="#contact">Contacto</Link></li>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-" type="submit"><input className="form-control me-34" type="search" placeholder="Search" aria-label="Search" />
                            </button>
                            <li><button id="config1" className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg></button>
                                <ul className="dropdown-menu">
                                    <li><Link id="drop1" className="dropdown-item" to="#">cuenta</Link></li>
                                    <li><Link id="drop1" className="dropdown-item" to="#">carrito</Link></li>
                                    <li><Link id="drop1" className="dropdown-item" to="#">configuracion</Link></li>
                                </ul>
                            </li></form>
                    </ul>
                </nav>
                <div className="contenedor">
                    <div>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-" type="submit"><input className="form-control me-34" type="search" placeholder="Search" aria-label="Search" />
                            </button>
                        </form></div>
                    <div className="empleados">
                        <div className="list-group">
                            <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">SANTIAGO DELGADO</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">Empleado de logistica de la empresa</p>
                                <small>observacion:trabaja jornada diurna</small>
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Carlos Andres Gomez </h5>
                                    <small className="text-body-secondary">3 days ago</small>
                                </div>
                                <p className="mb-1">Empleado de logistica de la empresa</p>
                                <small className="text-body-secondary">observacion: Acaba de ingresar ala empresa</small>
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Diana Carolina </h5>
                                    <small className="text-body-secondary">3 days ago</small>
                                </div>
                                <p className="mb-1">Se encarga de atender alos clientes de la empresa</p>
                                <small className="text-body-secondary">observacion: Es poco tolerante</small>
                            </Link>
                        </div>
                        <button type="button" className="btn btn-primary" id="liveToastBtn">Ver Empleado</button>
                        <div className="toast-container position-static">
                            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <img src="..." className="rounded me-2" alt="..." />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small className="text-body-secondary">just now</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                                </div>
                                <div className="toast-body">
                                    See? Just like this.
                                </div>
                            </div>
                        </div>
                        <div className="viewerEm">
                            <img id="usuario1" src="https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png" alt="imagen-usuario" />
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Modificar
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Usuario Modificado</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            Usuaurio modificado con exito
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></>

   

    );

}



export default Admin;