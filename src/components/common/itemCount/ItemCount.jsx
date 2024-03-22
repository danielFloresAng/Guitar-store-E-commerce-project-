import React from "react";
import "./ItemCount.css";

export const ItemCount = ({ add, sus, counter, onAdd }) => {
  return (
    <div>
      <div className="count-container">
        <button onClick={add}>+</button>
        <h3>{counter}</h3>
        <button onClick={sus}>-</button>
      </div>

      <button className="add-cart-button" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};
