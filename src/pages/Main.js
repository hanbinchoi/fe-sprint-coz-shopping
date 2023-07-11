import { styled } from "styled-components";
import Product from "../components/Product";

const Container = styled.div`
  padding: 104px 76px 88px;
  height: 640px;
  div {
    size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Main() {
  return (
    <Container>
      <div>상품 리스트</div>
      <ItemContainer>
        <Product />
        <Product />
        <Product />
        <Product />
      </ItemContainer>
      <div>북마크 리스트</div>
      <ItemContainer>
        <Product />
        <Product />
        <Product />
        <Product />
      </ItemContainer>
    </Container>
  );
}

export default Main;
