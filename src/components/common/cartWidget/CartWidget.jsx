import { RiShoppingCartLine } from "react-icons/ri";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  let total = totalItems();

  return (
    <div className="cart-widget-container">
      {<RiShoppingCartLine />}
      <p>{total}</p>
    </div>
  );
};
