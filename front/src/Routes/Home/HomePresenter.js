import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 48px;
  }
`;

const Slider = styled.div`
  height: calc(100vh - 48px);
  transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Slide = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  color: white;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Dots = styled.ul`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Dot = styled.button`
  font-size: 0;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:before {
    font-size: 26px;
    content: "•";
    color: ${(props) => (props.current ? "white" : "#888")};
  }
`;

const Content = styled.span``;

const HomePresenter = ({ loading }) => (
  <>
    <Helmet>
      <title>Teamate</title>
    </Helmet>
    {loading ? <ProgressIndicator /> : <Container>ddd{loading}</Container>}
    {console.log(loading)}
  </>
);

export default HomePresenter;
