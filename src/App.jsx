import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Cart } from "./components/common/cart/Cart";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ItemDetailContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
