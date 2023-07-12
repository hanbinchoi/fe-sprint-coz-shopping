import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import axios from "axios";
import { useRecoilState } from "recoil";
import { item } from "./components/atoms";

function App() {
  const [isDropdownView, setDropDownView] = useState(false);
  const [products, setProducts] = useRecoilState(item);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <BrowserRouter>
      <Header
        isDropdownView={isDropdownView}
        setDropDownView={setDropDownView}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={products.length !== 0 ? <Main /> : null}
        ></Route>
        <Route
          path="/products/list"
          element={products.length !== 0 ? <ProductList /> : null}
        ></Route>
        <Route
          path="/bookmark"
          element={products.length !== 0 ? <Bookmark /> : null}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
