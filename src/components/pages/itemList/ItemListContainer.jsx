import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((response) => {
      if (category) {
        const productFilter = response.filter(
          (product) => product.category === category
        );
        setElements(productFilter);
      } else {
        setElements(response);
      }
      setIsLoading(false);
    });
  }, [category]);

  return (
    <>{isLoading ? <h2>Cargando...</h2> : <ItemList elements={elements} />}</>
  );
};
