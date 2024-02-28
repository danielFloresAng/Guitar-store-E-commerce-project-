import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  img,
  title,
  description,
  price,
  stock,
  category,
}) => {
  console.log();
  return (
    <div className="item-detail-container" key={id}>
      <div className="img-info-container">
        <img src={img} alt="" />

        <div className="info-detail">
          <h2>Modelo: {title}</h2>
          <p>Descripción: {description}</p>
          <h4>Precio: {price}</h4>
        </div>
      </div>

      <button className="add-cart-button">Agregar al carrito</button>
    </div>
  );
};
