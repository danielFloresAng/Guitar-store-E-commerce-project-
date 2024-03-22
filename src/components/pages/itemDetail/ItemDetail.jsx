import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  img,
  title,
  description,
  price,
  stock,
  category,
  onAdd,
  initialValue,
}) => {
  return (
    <div className="productCardContainer" key={id}>
      <div className="img-container-card">
        <img src={img} alt="" />
      </div>

      <p>
        <span>Model:</span> {title}
      </p>
      <p>
        <span>Description:</span> {description}
      </p>
      <span> ${price} USD</span>

      {initialValue && (
        <p className="unidades-en-carrito">
          Tienes {initialValue} unidades tu carrito
        </p>
      )}
      <ItemCountContainer
        stock={stock}
        initialValue={initialValue}
        onAdd={onAdd}
      />
    </div>
  );
};
