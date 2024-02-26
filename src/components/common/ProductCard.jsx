import "./ProductCard.css";

export const ProductCard = ({
  img,
  title,
  description,
  price,
  stock,
  category,
}) => {
  return (
    <div className="productCardContainer">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <p>{price}</p>
      <p>{stock}</p>
      <h3>{category}</h3>
      {/* <Link to='/itemDetail:id'> */}
      <button className="boton-detalles">Detalles</button>
      {/* </Link> */}
    </div>
  );
};
