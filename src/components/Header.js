import logo from "../img/로고.png";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container, Logo, Menu, DropDownMenu } from "./HeaderContainer";

function Header({ isDropdownView, setDropDownView }) {
  const handleClickContainer = (e) => {
    e.stopPropagation();
    if (e.currentTarget.nodeName === "svg") setDropDownView(!isDropdownView);
    else {
      setDropDownView(false);
    }
  };
  return (
    <Container onClick={handleClickContainer}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <img src={logo} alt="로고" />
          <span>COZ Shopping</span>
        </Logo>
      </Link>

      <Menu>
        <BiMenu onClick={handleClickContainer} />
        {isDropdownView ? (
          <DropDownMenu>
            <li>최한빈님, 안녕하세요!</li>
            <Link to="/products/list" style={{ textDecoration: "none" }}>
              <li>상품리스트 페이지</li>
            </Link>
            <Link to="/bookmark" style={{ textDecoration: "none" }}>
              <li>북마크 페이지</li>
            </Link>
          </DropDownMenu>
        ) : null}
      </Menu>
    </Container>
  );
}
export default Header;
