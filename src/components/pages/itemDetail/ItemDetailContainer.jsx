import React, { useEffect, useState } from "react";
import { getProducts } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setItems(response));
  }, []);



  return <ItemDetail items={items}/>;
};
