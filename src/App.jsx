import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a Blanco Hogar"} />
    </>
  );
};

export default App;
