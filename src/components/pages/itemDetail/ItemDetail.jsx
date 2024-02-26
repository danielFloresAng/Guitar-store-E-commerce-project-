import React from 'react'

export const ItemDetail = ({id, category, price, name, description, image}) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <img src={image} alt="" />
      <p>{description}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}
