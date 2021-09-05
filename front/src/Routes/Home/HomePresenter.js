import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
// import Slider from "Components/Slider";

const Container = styled.div`
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 48px;
  }
`;

const HomePresenter = ({ loading }) => {

  return (
    <>
      <Helmet>
        <title>Teamate</title>
      </Helmet> 

      {loading ? <ProgressIndicator /> : <Container>{loading}</Container>}
      {console.log(loading)}
    </>
  );
};
export default HomePresenter;
