import { styled } from "styled-components";
const Card = styled.div`
  text-align: center;
`;
const Title = styled.p`
  padding-top: 4px;
  font-weight: ${(props) => (props.focused === "true" ? "700" : "400")};
  color: ${(props) => (props.focused === "true" ? "#412DD4" : "#000000")};
  text-decoration: ${(props) =>
    props.focused === "true" ? "underline" : "none"};
`;
const Circle = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  cursor: pointer;
`;

function Filter({ img, title, focused }) {
  return (
    <Card>
      <Circle>
        <img src={img} alt={title} />
      </Circle>
      <Title focused={"" + focused}>{title}</Title>
    </Card>
  );
}

export default Filter;
