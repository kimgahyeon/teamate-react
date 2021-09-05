import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import JoinContainer from "Routes/Join";
import LoginContainer from "Routes/Login";

const Header = styled.header`
  color: wthie;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.ul`
  display: flex;
`;

const Divider = styled.span`
  margin: 0.5rem 0;
  border-left: 2px solid white;
`;

const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  border-bottom: 4px solid
    ${(props) => (props.current ? "#3498db" : "transparent")}; // flatuicolors.com
  transition: border-bottom 0.5s ease-in-out;
  cursor: pointer !important;
`;

const Title = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SLink = styled(Link)`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

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
            <SLink to="/">Home</SLink>
          </Item>
          <Divider />
          <Item>
            <Title>
              {
                // 현재 페이지명
              }
              현재
            </Title>
          </Item>
        </Left>
        <Right>
          <Item current={pathname === "/mates"}>
            <SLink to="/mates">Mates</SLink>
          </Item>
          <Item current={pathname === "/projects"}>
            <SLink to="/projects">Projects</SLink>
          </Item>
          {
            // 세션 검사  (로그인 / 로그아웃)
          }

          <Item>
            <Title onClick={openModal}>Sign</Title>
            <Modal
              open={modalOpen}
              close={closeModal}
              header={isMate ? "로그인하기" : "회원가입하기"}
            >
              {isMate ? (
                <LoginContainer setIsMate={setIsMate}></LoginContainer>
              ) : (
                <JoinContainer setIsMate={setIsMate}></JoinContainer>
              )}
            </Modal>
          </Item>
        </Right>
      </List>
    </Header>
  );
});
