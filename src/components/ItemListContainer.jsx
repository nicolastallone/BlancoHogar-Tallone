import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/logobh.png";
import ItemList from "./ItemList"
import Data from "./data.json"


const ItemListContainer = ({}) => {
const [productos, setProductos] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch(Data)
        const data = await response.json()
        setProductos(data)
      } catch (error){
        console.log("error")
      }
    }
    fetchData()
  },[])
  return (

    <ItemList productos={Data}/>

  );
};

export default ItemListContainer;
