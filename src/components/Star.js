import { FaStar } from "react-icons/fa";
import { Container } from "./container/StarContainer";

function Star({ bookmark }) {
  return (
    <Container bookmark={"" + bookmark}>
      <FaStar />
    </Container>
  );
}

export default Star;
