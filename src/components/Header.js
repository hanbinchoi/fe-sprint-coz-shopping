import { styled } from "styled-components";
import logo from "../img/로고.png";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0.5px 5px gray;
`;
const Logo = styled.div`
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
const Menu = styled.div`
  padding: 0 78px;
  font-size: 3rem;
`;
const DropDownMenu = styled.ul`
  position: absolute;
  right: 50px;
  width: 200px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
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
