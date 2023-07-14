import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import axios from "axios";
import { useRecoilState } from "recoil";
import { data } from "./components/atoms";

function App() {
  const [isDropdownView, setDropDownView] = useState(false);

  return (
    <BrowserRouter>
      <Header
        isDropdownView={isDropdownView}
        setDropDownView={setDropDownView}
      ></Header>
      <Routes>
        <Route path="/" element={<Main />}>
          {" "}
        </Route>
        <Route path="/products/list" element={<ProductList />}>
          {" "}
        </Route>
        <Route path="/bookmark" element={<Bookmark />}>
          {" "}
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
