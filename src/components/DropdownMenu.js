import { DropdownContainer } from "./container/DropdownContainer";
import { Link } from "react-router-dom";

function DropdownMenu() {
  console.log("Dropdown!");
  return (
    <DropdownContainer>
      <li>최한빈님, 안녕하세요!</li>
      <li>
        {" "}
        <Link to="/products/list" style={{ textDecoration: "none" }}>
          상품리스트 페이지
        </Link>
      </li>
      <li>
        <Link to="/bookmark" style={{ textDecoration: "none" }}>
          북마크 페이지
        </Link>
      </li>
    </DropdownContainer>
  );
}

export default DropdownMenu;
