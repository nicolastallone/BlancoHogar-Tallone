import React from "react";
import {Link} from "react-router-dom"
import FormCart from "./FormCart"

const Cart = () => {
  let cart = "";

  if (cart === "vacio") {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <h1>El carrito esta vacio...</h1>
          <Link to={"/productos"}>
            <button>Ver productos</button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <h3>Tu carrito de compras</h3>
          <FormCart />
        </div>
      </>
    );
  }
};

export default Cart;
