import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";

function App() {
  let tienda = "Obession";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1> 404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
