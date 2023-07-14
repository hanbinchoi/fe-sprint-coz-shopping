import { useEffect, useState } from "react";
import {
  CategoryContainer,
  ProductListContainer,
  ItemContainer,
  Item,
} from "../components/container/ProductListContainer";
import axios from "axios";
import Card from "../components/Card";

function ProductList() {
  const [item, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(item);
  return (
    <ProductListContainer>
      <CategoryContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CategoryContainer>
      <ItemContainer>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </ItemContainer>
    </ProductListContainer>
  );
}

export default ProductList;
