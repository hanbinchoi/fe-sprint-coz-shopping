import { styled } from "styled-components";

export const Container = styled.div`
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0.5px 5px gray;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 76px;
  gap: 12px;
  span {
    color: #000000;
    font-weight: bold;
    font-size: 32px;
  }
`;
export const Menu = styled.div`
  padding: 0 78px;
  font-size: 3rem;
  cursor: pointer;
`;
