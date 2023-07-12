import { styled } from "styled-components";
import Star from "./Star";

const Container = styled.div`
  width: 264px;
  height: 264px;
  display: grid;
  grid-template-columns: 214px 50px;
  grid-template-rows: 210px 54px;
`;
const ImageContainer = styled.div`
  position: relative;
  grid-column: span 2;
  img {
    width: 264px;
    height: 210px;
    object-fit: cover;
  }
`;
const DescContainer = styled.div`
  margin-top: 6px;
  grid-column: span 2;
  font-size: 16px;
  font-weight: 800;
  display: grid;
  grid-template-columns: 214px 50px;
  grid-template-rows: 24px 24px;
  .discount {
    color: #452cdd;
    text-align: right;
  }

  .price {
    grid-column: span 2;
    font-weight: 400;
    text-align: right;
  }
`;

function Product({ product }) {
  return (
    <Container>
      <ImageContainer>
        <img src={product.image_url} alt={product.title} />
        <Star />
      </ImageContainer>
      <DescContainer>
        <span>{product.title}</span>
        <span className="discount">{`${product.discountPercentage}%`}</span>
        <span className="price">{product.price}원</span>
      </DescContainer>
    </Container>
  );
}

export default Product;
