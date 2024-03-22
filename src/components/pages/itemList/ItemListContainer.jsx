import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
// import { getProducts } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebaseSetup";

export const ItemListContainer = () => {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);

    let itemsCollection = collection(dataBase, "items");

    let filterData;

    if (category) {
      let itemsFiltered = query(
        itemsCollection,
        where("category", "==", category)
      );
      filterData = itemsFiltered;
    } else {
      filterData = itemsCollection;
    }

    getDocs(filterData)
      .then((resp) => {
        let newItemsArray = resp.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setElements(newItemsArray);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>{isLoading ? <h3>Cargando...</h3> : <ItemList elements={elements} />}</>
  );
};
