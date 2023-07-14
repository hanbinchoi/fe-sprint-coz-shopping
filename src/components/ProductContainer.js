import { styled } from "styled-components";

export const Container = styled.div`
  width: 264px;
  height: 264px;
  display: grid;
  grid-template-columns: 214px 50px;
  grid-template-rows: 210px 54px;
`;
export const ImageContainer = styled.div`
  position: relative;
  grid-column: span 2;
  cursor: pointer;
  img {
    width: 264px;
    height: 210px;
    object-fit: cover;
  }
`;
export const DescContainer = styled.div`
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
