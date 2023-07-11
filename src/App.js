import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
`;

function App() {
  const [isDropdownView, setDropDownView] = useState(false);
  return (
    <Container>
      <BrowserRouter>
        <Header
          isDropdownView={isDropdownView}
          setDropDownView={setDropDownView}
        ></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/products/list" element={<ProductList />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
