import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Bienvenido from "./components/Bienvenido";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import StateComponent from "./context/StateComponent";
import ShoppingCartProvider from "./components/ShoppingCartProvider";

const App = () => {
  return (
    <>
      {/* <ShoppingCartProvider> */}
        <StateComponent>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Bienvenido />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </StateComponent>
      {/* </ShoppingCartProvider> */}
    </>
  );
};

export default App;
