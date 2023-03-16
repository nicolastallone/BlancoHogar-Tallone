import React from 'react'
import Item from "./Item"

const itemList = ({ productos }) => {
  return (
    <div className='row d-flex justify-content-center'>
        {productos.map((productos) => (
            <Item 
            key={productos.id}
            id={productos.id}
            nombre={productos.nombre}
            categoria={productos.categoria}
            descripcion={productos.descripcion}
            stock={productos.precio}
            precio={productos.precio}
            imagen={productos.imagen}
            />
        ))}
    </div>
  )
}

export default itemList