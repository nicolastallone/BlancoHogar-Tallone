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
                <nav className="nav-link active" aria-current="page">
                  Inicio
                </nav>
              </li>
              </Link>
              <Link to={'/productos'}>
              <li className="nav-item">
                <nav className="nav-link">Productos</nav>
              </li>
              </Link>
              <li className="nav-item dropdown">
                <nav
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </nav>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/categoria/${"Sabanas"}`}>
                    <nav className="dropdown-item" href="#">
                      Sabanas
                    </nav>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"Frazadas"}`}>
                    <nav className="dropdown-item" href="#">
                      Frazadas
                    </nav>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"Almohadas"}`}>
                    <nav className="dropdown-item" href="#">
                      Almohadas
                    </nav>
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

