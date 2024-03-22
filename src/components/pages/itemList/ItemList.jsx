import { ProductCard } from "../../common/productCard/ProductCard";
import './ItemList.css'
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseSetup";
import { allProducts } from "../../../productsMock";

export const ItemList = ({ elements }) => {
  const getAllItems = () => {
    let itemsCollection = collection(dataBase, "items");

    allProducts.forEach((element) => {
      addDoc(itemsCollection, element);
    });
  };

  return (
    <div className="cards-container">
      {/* <button onClick={getAllItems()}>Add to firebase</button> */}
      {elements.map(
        ({ id, img, title, description, price, stock, category }) => {
          return (
            <ProductCard
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
              stock={stock}
              category={category}
              id={id}
            />
          );
        }
      )}
    </div>
  );
};
