import { createContext, useState } from "react";

export const CounterContext = createContext();

const StateComponent = ({ children }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

/*   const resetear = () => {
    setCounter(0);
  }; */

  return (
    <CounterContext.Provider value={{ contador, sumar, restar }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponent;
