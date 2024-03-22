import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

export const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const { clearItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { totalPrice } = useContext(CartContext);

  let total = totalPrice();

  return (
    <div className="cart-container">
      {cart.map((item) => {
        return (
          <div className="productCardContainer" key={item.id}>
            <div className="img-container-card">
              <img src={item.img} />
            </div>
            <p>
              <span>Product:</span> {item.title}
            </p>
            <p>
              <span>Price:</span> ${item.price} USD
            </p>
            <p>
              <span>Quantity:</span> {item.quantity} item
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="boton-eliminar-producto"
            >
              Delete product
            </button>
            <Link to={`/productDetail/${item.id}`}>
              <button className="boton-detalles">Go to the details</button>
            </Link>
          </div>
        );
      })}
      <p className="cuenta-total">
        <span>Total:</span> ${total} USD
      </p>
      <button onClick={() => clearItems()} className="boton-eliminar-producto">
        Delete all products
      </button>
      <Link to="/checkout">
        <button className="boton-finalizar-compra"> Finish order</button>
      </Link>
    </div>
  );
};
