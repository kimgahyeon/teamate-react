import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

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

const MenuList = styled.ul`
  display: flex;
`;

const UserList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  border-bottom: 4px solid
    ${(props) => (props.current ? "#3498db" : "transparent")}; // flatuicolors.com
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header className="nav">
    <List>
      <MenuList>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/mates"}>
          <SLink to="/mates">Mates</SLink>
        </Item>
        <Item current={pathname === "/projects"}>
          <SLink to="/projects">Projects</SLink>
        </Item>
      </MenuList>
      {
        // 세션 검사  (로그인 / 로그아웃)
      }
      <UserList>
        <Item current={pathname === "/login"}>
          <SLink to="/login">Login</SLink>
        </Item>
      </UserList>
    </List>
  </Header>
));
