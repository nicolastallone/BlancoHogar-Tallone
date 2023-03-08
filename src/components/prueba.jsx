import React from "react";
import Data from "./data.json";

const prueba = () => {
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error("No hay productos"));
      }
      setTimeout(() => {
        resolve(datos);
      }, 2000);
    });
  };

  // getDatos().then((productos) => console.log(productos));

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <div>prueba</div>;
  /*<ItemList data={datos} />;*/ 
  {
    datos.map((prod) => {
      return (
        <div key={prod.id}>
          <h1>{prod.nombre}</h1>
          <h2>{prod.precio}</h2>
        </div>
      );
    });
  }
};

export default prueba;
