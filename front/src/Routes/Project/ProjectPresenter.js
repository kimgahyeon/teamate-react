import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import ProjectCard from "Components/ProjectCard";

const Container = styled.div`
  padding: 80px;
  text-align: center;
`;

const ProjectPresenter = ({ setStatus, loading, error, projects }) => (
  <>
    <Helmet>
      <title>Mates | Teamate</title>
    </Helmet>

    {loading ? (<ProgressIndicator />) : (
      <Container>
        {projects && projects.length > 0 && projects.map((project) => (<ProjectCard {...project} />))}
      </Container>)}
  </>
);

export default ProjectPresenter;