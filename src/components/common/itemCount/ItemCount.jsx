import React from "react";
import "./ItemCount.css";

export const ItemCount = ({ add, sus, reset, counter }) => {
  return (
    <div>
      <div className="count-container">
        <button onClick={add}>+</button>
        <h3>{counter}</h3>
        <button onClick={sus}>-</button>
        <button onClick={reset}>Quitar productos</button>
      </div>
      <button className="add-cart-button">Agregar al carrito</button>
    </div>
  );
};
