

export const ItemDetail = ({id, category, price, name, description, image}) => {
  return (
    <div key={id}>
      <h2>Modelo: {name}</h2>
      <h4>Precio: {price}</h4>
      <img src={image} alt="" />
      <p>Descripción:{description}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}
