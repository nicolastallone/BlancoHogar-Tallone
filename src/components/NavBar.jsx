import React from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/logobh.png";

const NavBar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="60" alt="BlancoHogar" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/productos"}>
                  Productos
                </a>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sabanas</a></li>
            <li><a class="dropdown-item" href="#">Frazadas</a></li>
            <li><a class="dropdown-item" href="#">Almohadas</a></li>
          </ul>
        </li>
            </ul>
            <span className="navbar-text">
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-success">
                  Ingresar
                </button>
                <button type="button" className="btn btn-info">
                  Crear Cuenta
                </button>
              </div>
            </span>
            <a href="/cart">
            <CartWidget />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
