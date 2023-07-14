import { styled } from "styled-components";
import Product from "../components/Product";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState, data } from "../components/atoms";
import Brand from "../components/Brand";
import Exhibition from "../components/Exhibition";
import Category from "../components/Category";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 24px 76px 12px 76px;
`;

const ListTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 0;
`;

function Main() {
  const [products, setProducts] = useRecoilState(data);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);
  const item = useRecoilValue(data);
  const bookmark = useRecoilValue(bookmarkState);
  console.log(bookmark);
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
