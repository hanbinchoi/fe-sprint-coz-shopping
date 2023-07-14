import Product from "../components/Product";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bookmarkState, data } from "../components/atoms";
import Brand from "../components/Brand";
import Exhibition from "../components/Exhibition";
import Category from "../components/Category";
import { useEffect } from "react";
import axios from "axios";
import {
  Container,
  ListTitle,
  ItemContainer,
} from "../components/MainContainer";

function Main() {
  const setProducts = useSetRecoilState(data);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);
  const item = useRecoilValue(data);
  const bookmark = useRecoilValue(bookmarkState);
  return (
    <Container>
      <ListTitle>상품 리스트</ListTitle>
      <ItemContainer>
        {item.map((ele) =>
          ele.type === "Product" ? (
            <Product key={ele.id} product={ele} />
          ) : ele.type === "Brand" ? (
            <Brand key={ele.id} brand={ele} />
          ) : ele.type === "Exhibition" ? (
            <Exhibition key={ele.id} exhibition={ele} />
          ) : (
            <Category key={ele.id} category={ele} />
          )
        )}
      </ItemContainer>
      <ListTitle>북마크 리스트</ListTitle>
      <ItemContainer>
        {bookmark
          .slice(0, 4)
          .map((ele) =>
            ele.type === "Product" ? (
              <Product key={ele.id} product={ele} />
            ) : ele.type === "Brand" ? (
              <Brand key={ele.id} brand={ele} />
            ) : ele.type === "Exhibition" ? (
              <Exhibition key={ele.id} exhibition={ele} />
            ) : (
              <Category key={ele.id} category={ele} />
            )
          )}
      </ItemContainer>
    </Container>
  );
}

export default Main;
