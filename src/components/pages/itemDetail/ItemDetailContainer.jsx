import React, { useEffect, useState } from "react";
import { getProduct, getProducts } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((response) => {
      setProduct(response)
      setIsLoading(false)
    });
  }, [id]);


  return(
    <>
    {isLoading ? <h3>Loading...</h3> : <ItemDetail product={product}/>}
    </>
  )

};
