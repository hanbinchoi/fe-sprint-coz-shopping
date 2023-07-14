import logo from "../img/로고.png";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container, Logo, Menu } from "./container/HeaderContainer";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

function Header() {
  console.log("Header!");
  const [isDropdownView, setDropDownView] = useState(false);
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
        {isDropdownView ? <DropdownMenu /> : null}
      </Menu>
    </Container>
  );
}
export default Header;
