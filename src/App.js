import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";
import Footer from "./components/Footer";
import NotificationCenter from "./components/NotificationCenter";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}>
          {" "}
        </Route>
        <Route path="/products/list" element={<ProductList />}>
          {" "}
        </Route>
        <Route path="/bookmark" element={<BookmarkList />}>
          {" "}
        </Route>
      </Routes>
      <NotificationCenter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
