import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import ogu from "assets/ogu.jpeg";
import ProjectCard from "Components/ProjectCard";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 48px;
  }
  display: grid;
  // 화면 크기에 맞춰서 컬럼수 자동으로 채워줌
  grid-template-columns: repeat(auto-fit, minmax(410px, auto));
  justify-items: center;
  text-align: center;
`;

const MateSection = styled.div`
  padding: 50px 200px;
  justify-content: space-around;
  display: flex;
`;

const MateLeft = styled.div`
  padding-right: 50px;
`;

const MateRight = styled.div`
  text-align: center;
`;

const MateName = styled.div`
  font-size: 26px;
  font-weight: 400;
`;
const MateRole = styled.div`
  font-size: 14px;
  color: #b1b1b1;
  display: inline-block;
  padding-left: 10px;
`;

const MateRateNum = styled.span`
  font-size: 17px;
  font-weight: 100;
`;

const MateRate = styled.span`
  float: right;
`;

const MateTags = styled.span`
  float: left;
  background-color: #2ac1bc;
  padding: 2px 10px;
  font-size: 12px;
  color: white;
  text-align: center;
  border-radius: 15px;
  margin-right: 7px;
  margin-top: 10px;
`;

const MateIntroduce = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: 24px;
  margin-top: 80px;
`;
const MateProfile = styled.div`
  background-color: lightgray;
  border-radius: 90px;
  overflow: hidden;
  width: 160px;
  height: 160px;
  display: inline-block;
  vertical-align: middle;
  cursor: zoom-in;
  margin-bottom: 20px;
`;

const MateProfileEdit = styled.span`
  color: #b1b1b1;
  font-size: 12px;
  cursor: pointer;
`;

const MateProjectSection = styled.div`
  padding: 50px 200px;
`;
const MateProjectSectionTitle = styled.div`
  margin: 30px 20px 50px;
  font-size: 17px;
  font-weight: 700;
`;

const ProjectShowMore = styled.div`
  text-align: center;
`;

const MateDetailPresenter = ({ email, name, profile, role, introduce, tags, projects, rates }) => {
  const onGoingProjects = projects && projects.length > 0 && projects.filter((project) => project.status === 1);

  const terminatedProjects = projects && projects.length > 0 && projects.filter((project) => project.status === 2);

  return (
    <>
      <MateSection>
        <MateLeft>
          <MateName>
            {name}
            <MateRole> {role} </MateRole>
            <MateRate>
              ⭐️ <MateRateNum>4.7</MateRateNum>
            </MateRate>
          </MateName>

          {tags && tags.length > 0 && tags.map((tag) => <MateTags> #{tag} </MateTags>)}

          <MateIntroduce>
            안녕하세요 자기소개입니다. 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에
            이상이 있음으로써 용감하고 굳 세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는
            무엇을 위하여 광야에서 방황하였으며많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고
            작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며
            예수는 무엇을 위하여 광야에서 방황하였으며
            <br />
            <br />
            - 망포고 2012.03.02~2015.02.12 <br />
            - 아주대 2015.03.02~2021.02.22
            <br />
            {introduce}
          </MateIntroduce>
        </MateLeft>
        <MateRight>
          <MateProfile
            style={{ backgroundImage: `url(${ogu})`, backgroundPositionX: "-120px", backgroundPositionY: "-50px" }}
          >
            {/* 프사 */}
          </MateProfile>
          <MateProfileEdit> 프로필 편집 </MateProfileEdit>
        </MateRight>
      </MateSection>

      <MateProjectSection>
        <MateProjectSectionTitle>진행중인 프로젝트</MateProjectSectionTitle>
        <Container>
          {onGoingProjects &&
            onGoingProjects.length > 0 &&
            onGoingProjects.map((project) => <ProjectCard {...project}></ProjectCard>)}
        </Container>
        <ProjectShowMore> 더보기 </ProjectShowMore>

        <MateProjectSectionTitle>완료한 프로젝트</MateProjectSectionTitle>
        <Container>
          {terminatedProjects &&
            terminatedProjects.length > 0 &&
            terminatedProjects.map((project) => <ProjectCard {...project}></ProjectCard>)}
        </Container>
        <ProjectShowMore> 더보기 </ProjectShowMore>
      </MateProjectSection>
    </>
  );
};

export default MateDetailPresenter;
