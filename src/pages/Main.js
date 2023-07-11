import { styled } from "styled-components";
import Product from "../components/Product";

const Container = styled.div`
  padding: 24px 76px;
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
  gap: 24px;
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
