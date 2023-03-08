// Es un agrupador de un set de componentes de Item.jxs (debera incluirse en ItemListContainer


import React from 'react'
import Item from "./Item"

const itemList = ({ productos }) => {
  return (
    <div>
        {productos?.map((producto) => (
            <Item 
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            stock={producto.precio}
            precio={producto.precio}
            imagen={producto.imagen}
            />
        ))}
    </div>
  )
}

export default itemList