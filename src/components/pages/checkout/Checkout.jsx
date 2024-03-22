import "./Checkout.css";
export const Checkout = ({ saveUserData, sendData, purchaseId }) => {
  return (
    <div className="checkout-container">
      <h2>Order checkout</h2>

      {purchaseId ? (
        <h3>
          Thanks, your order id is: <span>{purchaseId}</span>
        </h3>
      ) : (
        <form onSubmit={sendData}>
          <p>Type your info:</p>
          <input
            name="nombre"
            type="text"
            placeholder="Name"
            onChange={saveUserData}
          />
          <input
            name="telefono"
            type="phone"
            placeholder="Phone"
            onChange={saveUserData}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={saveUserData}
          />
          <button className="boton-detalles">Buy products</button>
        </form>
      )}
    </div>
  );
};
