import styled from "styled-components";

const Footer_body = styled.footer`
  text-align: center;
  color: #888888;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return (
    <Footer_body>
      개인정보 처리방침 | 이용 약관
      <br />
      All rights reserved @ Codestates
    </Footer_body>
  );
}

export default Footer;
