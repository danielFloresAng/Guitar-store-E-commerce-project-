import React, { useContext, useEffect, useState } from "react";

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebaseSetup";

export const ItemDetailContainer = () => {
  const { toCart, totalQuantity } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const initialValue = totalQuantity(id);

  useEffect(() => {
    setIsLoading(true);
    let dataBaseCollection = collection(dataBase, "items");
    let refDoc = doc(dataBaseCollection, id);

    getDoc(refDoc)
      .then((resp) => setProduct({ ...resp.data(), id: resp.id }))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProfuct = {
      ...product,
      quantity: cantidad,
    };
    toCart(infoProfuct);
  };

  return (
    <>
      {isLoading ? (
        <h3>...</h3>
      ) : (
        <ItemDetail {...product} onAdd={onAdd} initialValue={initialValue} />
      )}
    </>
  );
};
