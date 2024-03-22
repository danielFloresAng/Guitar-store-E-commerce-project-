import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const toCart = (item) => {
    if (cart.some((product) => product.id === item.id)) {
      let newArray = cart.map((cartElement) => {
        if ((cartElement.id = item.id)) {
          return { ...cartElement, quantity: item.quantity };
        } else {
          return cartElement;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, item]);
      localStorage.setItem("cart", JSON.stringify([...cart, item]));
    }
  };
  const clearItems = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const removeItem = (id) => {
    let newFilterArray = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newFilterArray);
    localStorage.setItem("cart", JSON.stringify(newFilterArray));
  };

  const totalItems = () => {
    let total = cart.reduce((sum, cartItem) => {
      return sum + cartItem.quantity;
    }, 0);
    return total;
  };

  const totalPrice = () => {
    let total = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.quantity;
    }, 0);
    return total;
  };

  const totalQuantity = (id) => {
    let item = cart.find((elem) => elem.id === id);
    if (item) {
      return item.quantity;
    } else {
      return item;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        toCart,
        clearItems,
        removeItem,
        totalItems,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
