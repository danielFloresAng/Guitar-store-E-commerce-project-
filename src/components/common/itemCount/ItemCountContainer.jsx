import { useState } from "react";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";


export const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(0);

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
      })
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return <ItemCount sus={sus} counter={counter} add={add} reset={reset} />;
};
