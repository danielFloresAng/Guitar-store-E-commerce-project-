import { useContext, useState } from "react";

import { Checkout } from "./Checkout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseSetup";

export const CheckoutContainer = () => {
  const { cart, totalPrice, clearItems } = useContext(CartContext);
  const [purchaseId, setPurchaseId] = useState(null);
  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  let totalPriceItems = totalPrice();

  const sendData = (e) => {
    e.preventDefault();
    let purchaseOrder = {
      buyer: userData,
      items: cart,
      total: totalPriceItems,
    };

    const buyerDataCollection = collection(dataBase, "orders");

    addDoc(buyerDataCollection, purchaseOrder).then((resp) =>
      setPurchaseId(resp.id)
    );

    cart.forEach((item) => {
      const refDoc = doc(dataBase, "items", item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
    clearItems();
  };

  const saveUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Checkout
        sendData={sendData}
        saveUserData={saveUserData}
        purchaseId={purchaseId}
      />
    </>
  );
};
