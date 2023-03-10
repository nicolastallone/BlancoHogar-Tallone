import React from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/logobh.png";
import { Link } from "react-router-dom";

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
              <Link to={'/'}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </li>
              </Link>
              <Link to={'/productos'}>
              <li className="nav-item">
                <a className="nav-link">Productos</a>
              </li>
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/categoria/${"Sabanas"}`}>
                    <a className="dropdown-item" href="#">
                      Sabanas
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"Frazadas"}`}>
                    <a className="dropdown-item" href="#">
                      Frazadas
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"Almohadas"}`}>
                    <a className="dropdown-item" href="#">
                      Almohadas
                    </a>
                    </Link>
                  </li>
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
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

