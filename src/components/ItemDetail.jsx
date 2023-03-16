import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const { id } = useParams();

  const dataFilter = data.filter((dato) => dato.id == id);

  return (
    <>
      {dataFilter.map((dato) => (
        <div key={dato.id} className="col-4 text-center">
          <div className="card">
            <img src={dato.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{dato.nombre}</h5>
              <p className="card-text">{dato.descripcion}</p>
              <a href="#" className="btn btn-primary">
                Precio: $ {dato.precio}
              </a>
              <a href="#" className="btn btn-danger">
                Stock: {dato.stock}
              </a>
            </div>

            <ItemCount
              stock={dato.stock}
              id={dato.id}
              precio={dato.precio}
              nombre={dato.nombre}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
