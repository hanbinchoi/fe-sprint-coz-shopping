import { styled } from "styled-components";

export const Container = styled.div`
  padding: 24px 76px 12px 76px;
  position: relative;
  z-index: -10;
`;

export const ListTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 12px 0;
`;
