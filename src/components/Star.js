import { FaStar } from "react-icons/fa";
import { styled } from "styled-components";
const Container = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 24px;
  color: ${(props) => (props.bookmark === "true" ? "#FFD361" : "#DFDFDFCF")};
  cursor: pointer;
`;
function Star({ bookmark }) {
  return (
    <Container bookmark={"" + bookmark}>
      <FaStar />
    </Container>
  );
}

export default Star;
