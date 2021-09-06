import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MateCard = styled.div`
  width: 410px;
  height: 375px;
  margin: 20px 15px;
  position: relative;
  vertical-align: top;
  background-color: #ffffff;
  display: inline-block;
  text-align: left;
  box-shadow: 0px 0px 30px #eee;
  padding: 32px 35px;
  box-sizing: border-box;
`;

const MateRole = styled.div`
  position: absolute;
  right: 35px;
  color: #979797;
  font-size: 14px;
  cursor: pointer;
`;

const MateImage = styled.div`
  // background
  border-radius: 20px;
  overflow: hidden;
  width: 33px;
  height: 33px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const MateName = styled.div`
  margin-left: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #3c3c3c;
  cursor: pointer;
`;

const MateTags = styled.div`
  font-size: 16px;
  color: #3c3c3c;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 30px;
`;

const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0px;
  bottom: 23px;
  color: #707070;
`;
const LastEdited = styled.div`
  position: absolute;
  top: 3px;
  left: 30px;
`;

const BookmarkIcon = styled.div`
  position: absolute;
  right: 28px;
  top: 6px;
  cursor: pointer;
`;

const MateCardComponent = ({ _id, role, name, tags }) => {
  const [id, setId] = useState(_id);
  console.log(`In mate card component: ${_id}`);

  return (
    <Link to={`/mate/${id}`}>
      <MateCard>
        <MateImage> </MateImage>
        <MateRole> {role} </MateRole>
        <MateName> {name} </MateName>
        <MateTags>
          {tags && tags.length > 0 && tags.map((tag) => `#${tag} `)}
        </MateTags>
        <BottomSection>
          <LastEdited>3분 전 업데이트</LastEdited>
          <BookmarkIcon>
            {" "}
            <i class="far fa-bookmark"></i>{" "}
          </BookmarkIcon>
        </BottomSection>
      </MateCard>
    </Link>
  );
};

export default MateCardComponent;
