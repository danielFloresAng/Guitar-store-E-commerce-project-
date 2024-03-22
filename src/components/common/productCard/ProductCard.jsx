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
      <div className="img-container-card">
        <img src={img} alt="" />
      </div>
      <p>
        <span>Model:</span> {title}
      </p>
      <p>
        <span>About:</span> {description}
      </p>
      <span> ${price} USD</span>
      <p>In stock: {stock}</p>

      <Link to={`/productDetail/${id}`}>
        <button className="boton-detalles">Details</button>
      </Link>
    </div>
  );
};
