import { styled } from "styled-components";
export const Container = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 24px;
  color: ${(props) => (props.bookmark === "true" ? "#FFD361" : "#DFDFDFCF")};
  cursor: pointer;
`;
