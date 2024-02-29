import { RiShoppingCartLine } from "react-icons/ri";
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <div className="cart-widget-container">
      {<RiShoppingCartLine />}
      <p>0</p>
    </div>
  );
};
