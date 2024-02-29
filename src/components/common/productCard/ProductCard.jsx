import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({
  img,
  title,
  description,
  price,
  stock,
  category,
  id,
}) => {
  return (
    <div className="productCardContainer">
      <img src={img} alt="" />
      <h2>Model: {title}</h2>
      <h4>Description: {description}</h4>
      <p>Price: ${price} USD</p>
      <p>In stock: {stock}</p>
      <h3>Type: {category}</h3>
      <Link to={`/productDetail/${id}`}>
        <button className="boton-detalles">Detalles</button>
      </Link>
    </div>
  );
};
