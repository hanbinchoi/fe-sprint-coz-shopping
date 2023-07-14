import { styled } from "styled-components";

export const ProductListContainer = styled.div`
  padding: 24px 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const CategoryContainer = styled.div`
  padding-bottom: 12px;
  display: flex;
  gap: 36px;
  background-color: red;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: blue;
`;

export const Item = styled.div`
  min-width: 264px;
  min-height: 264px;
  background-color: beige;
`;
