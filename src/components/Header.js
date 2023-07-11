import { styled } from "styled-components";
import logo from "../img/로고.png";
import { BiMenu } from "react-icons/bi";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0.5px 5px gray;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 76px;
  gap: 12px;
  span {
    font-weight: bold;
    font-size: 32px;
  }
`;
const Menu = styled.div`
  padding: 30px 78px;
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
      <Logo>
        <img src={logo} alt="로고" />
        <span>COZ Shopping</span>
      </Logo>
      <Menu>
        <BiMenu onClick={handleClickContainer} />
        {isDropdownView ? (
          <DropDownMenu>
            <li>최한빈님, 안녕하세요!</li>
            <li>상품리스트 페이지</li>
            <li>북마크 페이지</li>
          </DropDownMenu>
        ) : null}
      </Menu>
    </Container>
  );
}
export default Header;
