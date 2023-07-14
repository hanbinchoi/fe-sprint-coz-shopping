import { styled } from "styled-components";

const Circle = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background-color: green;
`;

function Card() {
  return <Circle></Circle>;
}

export default Card;
