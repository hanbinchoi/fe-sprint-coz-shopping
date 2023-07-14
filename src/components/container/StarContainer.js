import { styled } from "styled-components";
export const Container = styled.span`
  font-size: 24px;
  color: ${(props) => (props.bookmark === "true" ? "#FFD361" : "#DFDFDFCF")};
  cursor: pointer;
`;

export const StarContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 12px;
`;

export const ModalStarContainer = styled.div``;
