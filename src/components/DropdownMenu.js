import { DropdownContainer } from "./container/DropdownContainer";
import { Link } from "react-router-dom";

function DropdownMenu() {
  console.log("Dropdown!");
  return (
    <DropdownContainer>
      <li>최한빈님, 안녕하세요!</li>
      <Link to="/products/list" style={{ textDecoration: "none" }}>
        <li>상품리스트 페이지</li>
      </Link>
      <Link to="/bookmark" style={{ textDecoration: "none" }}>
        <li>북마크 페이지</li>
      </Link>
    </DropdownContainer>
  );
}

export default DropdownMenu;
