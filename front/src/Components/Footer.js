import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  font-weight: 700;
  border-top: 1px solid #efefef;
  line-height: 50px;
  text-align: center;
  padding-top: 10px;
`;

const FooterInner = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 90vw;
  font-size: 14px;
`;

const FooterMenu = styled.div`
  float: right;
  color: #b1b1b1;
`;
const FooterMenuLi = styled.li`
  margin: 0px 15px;
  display: inline;
`;

const FooterLogo = styled.div`
  float: left;
  color: #2ac1bc;
  font-weight: 700;
  font-size: 18px;
`;

const FooterInfo = styled.div`
  clear: both;
  line-height: 22px;
  font-size: 12px;
  text-align: left;
  color: #b1b1b1;
`;
const Footer = ({}) => {
  return (
    <>
      <FooterContainer>
        <FooterInner>
          <FooterLogo> Teamate </FooterLogo>
          <FooterMenu>
            <ul>
              <FooterMenuLi>유튜브</FooterMenuLi>
              <FooterMenuLi>인스타</FooterMenuLi>
              <FooterMenuLi>페이스북</FooterMenuLi>
              <FooterMenuLi>DMC Lab.</FooterMenuLi>
            </ul>
          </FooterMenu>
          <FooterInfo>어송스시🍣 먹고싶어서 만든 프로젝트</FooterInfo>
        </FooterInner>
      </FooterContainer>
    </>
  );
};

export default Footer;
