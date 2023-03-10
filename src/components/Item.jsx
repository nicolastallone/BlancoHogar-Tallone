// Es un componente destinado a mostrar informacion breve del producto que el user clickeara luego para acceder a los detalles

import React from "react";
import { Link } from "react-router-dom";

const item = ({
  id,
  imagen,
  nombre,
  categoria,
  descripcion,
  stock,
  precio,
}) => {
  return (
    <div className="container text-center">
      <div key={id} className="row align-items-center m-4">
        <div className="card text-center col-4">
          <img src={imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary">
              $ {precio}
            </a>
            <button className="btn btn-grey">
              <Link to={`/item/${id}`}>Detalles</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
