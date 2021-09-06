import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import MateCard from "Components/MateCard";

const Container = styled.div`
  padding: 80px;
  text-align: center;
  display: grid;
  // 화면 크기에 맞춰서 컬럼수 자동으로 채워줌
  grid-template-columns: repeat(auto-fit, minmax(410px, auto));
	justify-items: center; 
  text-align: center;
`;

const MatePresenter = ({ loading, error, mates }) => (
  <>
    <Helmet>
      <title>Mates | Teamate</title>
    </Helmet>
    {loading ? (
      <ProgressIndicator />
    ) : (
      <Container>
        {mates &&
          mates.length > 0 &&
          mates.map((mate) => <MateCard {...mate} />)}
      </Container>
    )}
  </>
);

export default MatePresenter;
