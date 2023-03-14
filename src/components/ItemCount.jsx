import { useContext, useState } from "react";
import { CounterContext } from "../context/StateComponent";


const ItemCount = ({ stock, id, precio, nombre }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        {count < 1 ? (<button type="button" className="btn btn-primary">
          -
        </button>) : (<button type="button" className="btn btn-primary"  onClick={restar}>-</button>) }

        <button type="button" className="btn btn-white" onClick={() => agregarCarrito()}>
          Agregar Carrito: {count} 
        </button>
        {count < stock  ? ( <button type="button" className="btn btn-primary" onClick={sumar}>
          +
        </button>) : ( <button type="button" className="btn btn-primary">
          +
        </button>)}

      </div>
    </>
  );
};

export default ItemCount;
