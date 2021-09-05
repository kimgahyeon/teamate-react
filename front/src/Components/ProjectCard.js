import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectCard = styled.div`
  position: relative;
  width: 410px;
  height: 378px;
  vertical-align: top;
  margin: 20px 15px;
  background-color: #ffffff;
  text-align: left;
  box-shadow: 0px 0px 30px #eee;
  display: inline-block;
`

const ProjectCardContent = styled.div`
    padding: 25px 30px;
`

const ProjectCardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    overflow: hidden;
    // background-image: url(/img/card_sample.png);
    background-size: cover;
    background-position: center center;
    transition-duration: 0.5s;
    text-align: center;

    &:hover{
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
`
const ShowMore = styled.div`
    display: block;
    opacity: ${(props) => (props.hovered ? 1 : 0)};
    transition-duration: 0.5s;
    width: 136px;
    height: 35px;
    font-weight: 700;
    text-align: center;
    line-height: 35px;
    background: #FFFFFF;
    border-radius: 20px;
    font-size: 13px;
    color: #565656;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 50%);
`

const ProjectTitle = styled.div`
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`


const ProjectLeader = styled.div`
    color: #979797;
    font-size: 14px;
    margin-top: 10px;
    // margin-right: 15px;
    // max-width: 55%;
    // display: inline-block;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
`

const RecruitRole = styled.div`
    margin-top: 15px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`
const RecruitTags = styled.div`
    cursor: pointer;
    font-size: 15px;
    line-height: 25px;
    margin-top: 5px;
    color: #707070;
    word-break: keep-all;
`

const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0px;
  bottom: 23px;
  color: #707070;
`
const LastEdited = styled.div`
  position: absolute;
  top: 3px;
  left: 30px;
`

const BookmarkIcon = styled.div`
  position: absolute;
  right: 28px;
  top: 6px;
  cursor: pointer;
`

const ProjectCardComponent = ({ _id, title, content, requirements, leader, mates, status, createdAt, terminatedAt }) => {
  const [hovered, setHovered] = useState(false);

  const handlerMouseEnter = () => {
    setHovered(true);
  }

  const handlerMouseLeave = () => {
    setHovered(false);
  }

  return (
    <Link to={`/project/${_id}`}>
      <ProjectCard>
        <ProjectCardImg onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}>
          <ShowMore hovered={hovered}> show more </ShowMore>
        </ProjectCardImg>
        <ProjectCardContent>
          <ProjectTitle>
            {title}
          </ProjectTitle>
          <ProjectLeader> by {leader.name} </ProjectLeader>
          {requirements.map((requirement) => (
            <>
              <RecruitRole> {requirement.role} </RecruitRole>
              <RecruitTags> {requirement.content}</RecruitTags>
            </>
          ))}
        </ProjectCardContent>
        <BottomSection>
          <LastEdited> 3분 전 업데이트 </LastEdited>
          <BookmarkIcon> </BookmarkIcon>
        </BottomSection>
      </ProjectCard>
    </Link>)
};

export default ProjectCardComponent;