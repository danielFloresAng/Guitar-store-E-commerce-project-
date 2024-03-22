import { useState } from "react";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";

export const ItemCountContainer = ({ stock, onAdd, initialValue = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Sólo contamos con ${stock} unidades en stock`,
      });
    }
  };

  const sus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Cantidad no válida",
      });
    }
  };

  return <ItemCount sus={sus} counter={counter} onAdd={onAdd} add={add} />;
};
