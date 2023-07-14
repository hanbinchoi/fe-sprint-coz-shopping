import { styled } from "styled-components";

export const Container = styled.div`
  position: sticky;
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
`;
export const DropDownMenu = styled.ul`
  position: absolute;
  right: 50px;
  top: 70px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  width: 200px;
  height: 150px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 18px 20px 17.5px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -20px;
    right: 35px;
  }

  &:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 18px 20px 17.5px;
    border-color: rgba(0, 0, 0, 1) transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -20px;
    right: 35px;
  }

  li {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #000000;
  }

  li:last-child {
    border-bottom: none;
  }
`;
