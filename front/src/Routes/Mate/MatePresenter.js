import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import MateCard from "Components/MateCard";

const Container = styled.div`
  padding: 80px;
  text-align: center;
`;

const MatePresenter = ({ loading, error, mates }) => (
  <>
    <Helmet>
      <title>Mates | Teamate</title>
    </Helmet>
    {loading ? (<ProgressIndicator />) : (<Container>
      {mates && mates.length > 0 && mates.map((mate) => (<MateCard {...mate} />))}
    </Container>)}
  </>
);

export default MatePresenter;