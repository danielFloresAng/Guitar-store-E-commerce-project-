import "./App.css";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { CartContainer } from "./components/pages/cart/Cart";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./components/context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route
                path="/productDetail/:id"
                element={<ItemDetailContainer />}
              />
            </Route>
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
