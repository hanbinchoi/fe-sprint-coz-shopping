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
function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="로고" />
        <span>COZ Shopping</span>
      </Logo>
    </Container>
  );
}

export default Header;
