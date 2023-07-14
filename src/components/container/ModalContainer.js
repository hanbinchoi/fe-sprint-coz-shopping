import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  width: 744px;
  height: 480px;
  background-color: red;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    background-color: black;
  }
`;

export const ModalClose = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  color: #f8f8f8;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  position: absolute;
  bottom: 0;
  padding: 27px 24px;
  width: 664px;
  display: grid;
  align-items: center;
  grid-template-columns: 24px 664px;
  gap: 8px;
  color: #ffffff;
  font-weight: 700;
`;
