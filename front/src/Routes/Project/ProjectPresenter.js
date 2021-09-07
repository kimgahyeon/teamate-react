import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import ProjectCard from "Components/ProjectCard";

const Container = styled.div`
  padding: 80px;
  text-align: center;

  display: grid;
  // 화면 크기에 맞춰서 컬럼수 자동으로 채워줌
  grid-template-columns: repeat(auto-fit, minmax(410px, auto));
  justify-items: center;
  text-align: center;
`;

const ProjectPresenter = ({ setStatus, loading, error, projects }) => (
  <>
    <Helmet>
      <title>Mates | Teamate</title>
    </Helmet>

    {loading ? (
      <ProgressIndicator />
    ) : (
      <Container>
        {projects && projects.length > 0 && projects.map((project) => <ProjectCard key={project._id} {...project} />)}
      </Container>
    )}
  </>
);

export default ProjectPresenter;
