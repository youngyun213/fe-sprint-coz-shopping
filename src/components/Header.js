import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Header_body = styled.header`
  position: sticky;
  top: 0;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 75px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  #ham_icon {
    width: 30px;
  }

  .mouse_hover:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    padding-left: 12px;
  }

  #logo {
    width: 55px;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header_body>
      <Title>
        <Link to="/">
          <span>
            <img id="logo" className="mouse_hover" src="../logo.png" alt="logo" />
          </span>
        </Link>
        <h1 className="mouse_hover">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            COZ Shopping
          </Link>
        </h1>
      </Title>
      <div>
        <img
          id="ham_icon"
          className="mouse_hover"
          src="../icon.png"
          alt="햄버거 버튼"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen ? <Dropdown /> : null}
      </div>
    </Header_body>
  );
}

export default Header;
