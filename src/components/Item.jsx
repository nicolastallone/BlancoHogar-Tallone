// Es un componente destinado a mostrar informacion breve del producto que el user clickeara luego para acceder a los detalles

import React from "react";

const item = ({ id, imagen, nombre, descripcion, stock, precio }) => {
  return (
    <div className="container text-center">
      <div key={id} className="row align-items-center m-4">
        <div className="card text-center col">
          <img src={imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary">
              {stock}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
