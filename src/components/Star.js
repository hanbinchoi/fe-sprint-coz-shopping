import { FaStar } from "react-icons/fa";
import { styled } from "styled-components";
const Container = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 24px;
  color: ${(props) => (props.isBookmark ? "#FFD361" : "#DFDFDFCF")};
`;
function Star() {
  return (
    <Container>
      <FaStar />
    </Container>
  );
}

export default Star;
