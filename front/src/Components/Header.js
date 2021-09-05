import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import JoinContainer from "Routes/Join";
import LoginContainer from "Routes/Login";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Home = styled.div`
  color: #2AC1BC;
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
`

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.ul`
  display: flex;
`;

const CurrentPage = styled.span`
  position: absolute;
  left: 120px;
  cursor: default;
  padding-left: 25px;
  border-left: 1px solid #ddd;
  line-height: 20px;
  margin-top: 3px;
  color: #b1b1b1;
`

const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

const Item = styled.li`
  width: 80px;
  color: #3c3c3c;
  text-align: center;
  border-bottom: 4px solid
  // ${(props) => (props.current ? "#3498db" : "transparent")}; // flatuicolors.com
  transition: border-bottom 0.5s ease-in-out;
  cursor: pointer !important;
`;

const Title = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c3c3c;
`;

const Sign = styled.span`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
  color: #3c3c3c;
  padding-left: 30px;
  border-left: 1px solid #ddd;
  line-heigh: 20px;
  margin-left: 20px;
`

const SLink = styled(Link)`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c3c3c;
`;

// 가현: 페이지가 바뀔 때마다 Header에 현재 페이지를 보여주기 위한 객체 
var tabs = {
  "/": <p>홈</p>,
  "/mate": <p>메이트</p>,
  "/mate/test": <p>메이트 상세보기</p>,
  "/project": <p>프로젝트</p>
}

export default withRouter(({ location: { pathname } }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [isMate, setIsMate] = useState(true);

  return (
    <Header className="nav">
      <List>
        <Left>
          <Item current={pathname === "/"}>
            <SLink to="/"><Home> Teamate </Home> </SLink>
          </Item>
          <Item>
            <Title>
              {
                // 현재 페이지명
              }
              <CurrentPage>
                {/* key값이 pathname인 tabs 요소의 html를 뿌려준다. */}
                {tabs[pathname]}
              </CurrentPage>
            </Title>
          </Item>
        </Left>
        <Right>
          <Item current={pathname === "/mate"}>
            <SLink to="/mate">Mates</SLink>
          </Item>
          <Item current={pathname === "/project"}>
            <SLink to="/project">Projects</SLink>
          </Item>
          {
            // 세션 검사  (로그인 / 로그아웃)
          }

          <Item>
            <Title>
              <Sign onClick={openModal}>Sign</Sign>
            </Title>
            <Modal
              open={modalOpen}
              close={closeModal}
              header={isMate ? "로그인하기" : "회원가입하기"}
            >
              {isMate ? (
                <LoginContainer setModalOpen={setModalOpen} setIsMate={setIsMate}></LoginContainer>
              ) : (
                <JoinContainer setModalOpen={setModalOpen} setIsMate={setIsMate}></JoinContainer>
              )}
            </Modal>
          </Item>
        </Right>
      </List>
    </Header>
  );
});
