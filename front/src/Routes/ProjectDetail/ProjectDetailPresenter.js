import React from "react";
import styled from "styled-components";

const ProjectSection = styled.div`
  padding: 50px 120px;
`;
const ProjectTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const ProjectSub = styled.div`
  margin-top: 15px;
  display: flex;
`;

const Divider = styled.div`
  margin-top: 30px;
  border-bottom: 0.1em solid #ddd;
`;

const ProjectTags = styled.span`
  flex-basis: 80%;
`;

const ProjectTag = styled.span`
  background-color: #2ac1bc;
  padding: 2px 10px;
  font-size: 12px;
  color: white;
  text-align: center;
  margin-right: 10px;
  border-radius: 15px;
`;

const ProjectInfo = styled.span`
  flex-basis: 20%;
  align-items: middle;
  color: #b1b1b1;
  text-align: right;
`;

const ProjectContent = styled.div`
  padding-top: 50px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const ProjectImg = styled.img``;

const ProjectAttr = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const ProjectVal = styled.div`
  font-size: 15px;
  line-height: 24px;
  text-align: justify;
`;
const ProjectRoles = styled.span`
  flex-basis: 80%;
`;

const ProjectRole = styled.span`
  background-color: #2ac1bc;
  padding: 3px 16px;
  font-size: 14px;
  color: white;
  text-align: center;
  border-radius: 15px;
`;

const ProjectRequire = styled.div`
  font-size: 15px;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const ProjectMembers = styled.div`
  display: flex;
  column-gap: 30px;
`;

const ProjectMember = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProjectMemberImg = styled.div`
  background-color: lightgray;
  // background-image: url();
  border-radius: 90px;
  width: 80px;
  height: 80px;
`;

const ProjectLeaderName = styled.span`
  font-size: 15px;
  font-weight: 900;
  color: #2ac1bc;
  margin-top: 10px;
`;

const ProjectMemberName = styled.span`
  font-size: 15px;
  margin-top: 10px;
`;

const ProjectMemberRole = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #b1b1b1;
`;

const ProjectApply = styled.textarea`
  font-size: 16px;
  width: 100%;
  min-height: 90px;
  padding: 10px 10px;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  resize: none;
  font: inherit;
`;

const ProjectDetailPresenter = ({ title, content, requirements, leader, mates, status, createdAt, terminatedAt }) => (
  <>
    <ProjectSection>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSub>
        <ProjectTags>
          {/* FIXME: ?????? ?????? */}
          {/* {tags && tags.length > 0 && tags.map((tag) => <ProjectTag> {tag} </ProjectTag>)} */}
          <ProjectTag> #React </ProjectTag>
          <ProjectTag> #NodeJS </ProjectTag>
        </ProjectTags>
        <ProjectInfo>
          {" "}
          {/* status 0: ?????????, status 1: ?????? ??????, status 2: ???????????? ?????? */}
          {/* FIXME: ???????????? ????????? ??????? */}
          {createdAt} / {status ? "?????????" : "????????????"}
        </ProjectInfo>
      </ProjectSub>
      <Divider />

      <ProjectContent>
        <ProjectAttr> ???????????? ?????? </ProjectAttr>
        <ProjectVal> {content}</ProjectVal>
      </ProjectContent>

      <ProjectContent>
        <ProjectAttr> ???????????? </ProjectAttr>
        <ProjectRoles>
          <ProjectRole></ProjectRole>
          {/* FIXME: requirements ?????? */}
          {requirements && requirements.length > 0 && requirements.map((r) => <ProjectRole> {r.role} </ProjectRole>)}
        </ProjectRoles>
      </ProjectContent>

      <ProjectContent>
        <ProjectAttr>????????????</ProjectAttr>
        <ProjectMembers>
          <ProjectMember>
            <ProjectMemberImg></ProjectMemberImg>
            <ProjectLeaderName> ????????? </ProjectLeaderName>
            <ProjectMemberRole> ????????? </ProjectMemberRole>
          </ProjectMember>

          <ProjectMember>
            <ProjectMemberImg></ProjectMemberImg>
            <ProjectMemberName> ????????? </ProjectMemberName>
            <ProjectMemberRole> ????????? </ProjectMemberRole>
          </ProjectMember>
        </ProjectMembers>
      </ProjectContent>

      <Divider />
      <ProjectContent>
        <ProjectAttr> ????????????</ProjectAttr>
        <form>
          <ProjectApply placeholder="????????? ???????????? ??????????????????! ???????????? ?????? ???????????? ???????????? ???????????? ???????????????. " />
        </form>
      </ProjectContent>
    </ProjectSection>
  </>
);

export default ProjectDetailPresenter;
