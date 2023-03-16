import React from "react";
import Data from "./data.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  return (
    <div className="container d-flex justify-content-center">
      <ItemDetail data={Data} />
    </div>
  );
};

export default ItemDetailContainer;
