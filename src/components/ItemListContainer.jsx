import React from "react";
import { useState, useEffect } from "react";  
import ItemList from "./ItemList"
import Data from "./data.json"
import { useParams } from "react-router-dom";


const ItemListContainer = ({}) => {
const [productos, setProductos] = useState([])
const {categoria} = useParams()

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch(Data)
        const productos = await response.json()
        setProductos(productos)
      } catch (error){
        console.log("error")
      }
    }
    fetchData()
  },[])

  const catFilter = Data.filter((producto) => producto.categoria === categoria )

  return (
    <div className="container-fluid d-flex justify-content-center">
      {categoria ? <ItemList productos={catFilter}/> : <ItemList productos={Data}/> }
    </div>
  );
};

export default ItemListContainer;
