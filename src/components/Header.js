import styled from "styled-components";

const Header_body = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  height: 80px;

  padding: 25px 75px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  > #title_container {
    display: flex;
    align-items: center;

    > h1 {
      padding-left: 12px;
    }

    > span > #logo {
      width: 55px;
    }
  }

  > span > #ham_icon {
    width: 30px;
  }
`;

function Header() {
  return (
    <Header_body>
      <div id="title_container">
        <span>
          <img id="logo" src="../logo.png" alt="logo" />
        </span>
        <h1>COZ Shopping</h1>
      </div>
      <span>
        <img id="ham_icon" src="../icon.png" alt="햄버거 버튼" />
      </span>
    </Header_body>
  );
}

export default Header;
