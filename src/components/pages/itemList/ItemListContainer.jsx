import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts, products } from "../../../productsMock";

export const ItemListContainer = () => {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((response) => {
      setElements(products);
      setIsLoading(false);
    });
  }, []);

  return (
    <>{isLoading ? <h2>Cargando...</h2> : <ItemList elements={elements} />}</>
  );
};
