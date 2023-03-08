import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Bienvenido from "./components/Bienvenido";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Bienvenido />} />
        <Route exact path="/productos" element={<ItemListContainer />} />
        <Route exact path="/productos/:productos" element={<ItemListContainer />} />
        
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
