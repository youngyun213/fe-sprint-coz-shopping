import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.article`
  position: absolute;
  top: 0;
  right: 0;

  width: 200px;
  height: 172px;
  margin: 50px 25px 0 0;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

  #polygon {
    position: absolute;
    left: 65%;
    right: 27%;
    top: 2.33%;
    bottom: 87.21%;
    margin-top: -18px;
    border-top: 16px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #ffffff;
    border-left: 8px solid transparent;
  }
  ul {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 12.79%;
    bottom: 0%;

    background: #ffffff;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    flex-grow: 1;
    display: flex;
    align-items: center;

    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    padding: 0 26px;
  }

  li:first-child {
    justify-content: center;
  }

  img {
    width: 20px;
    margin-right: 8px;
  }
`;

function Dropdown() {
  return (
    <Menu>
      <div id="polygon"></div>
      <ul>
        <li>OOO님, 안녕하세요!</li>
        <li>
          <Link to="/productlist" style={{ color: "inherit", textDecoration: "inherit" }}>
            <img src="../product_icon.png" />
            상품리스트 페이지
          </Link>
        </li>
        <li>
          <Link to="/bookmarklist" style={{ color: "inherit", textDecoration: "inherit" }}>
            <img src="../bookmark_icon.png" />
            북마크 페이지
          </Link>
        </li>
      </ul>
    </Menu>
  );
}

export default Dropdown;
