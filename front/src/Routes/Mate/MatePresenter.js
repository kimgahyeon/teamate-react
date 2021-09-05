import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";


const Container = styled.div`
  padding: 80px;
`;

const ItemCard = styled.div`
  position: relative;
  width: 410px;
  vertical-align: top;
  margin: 20px 15px;
  background-color: #ffffff;
  display: inline-block;
  text-align: left;
  box-shadow: 0px 0px 30px #eee;
`

const MateCard = styled.div`
  padding: 32px 35px;
  box-sizing: border-box;
  height: 375px;
`;

const MateRole = styled.div`
  position: absolute;
  right: 35px;
  color: #979797;
  font-size: 14px;
  cursor: pointer;
`

const MateImage = styled.div`
  background
  border-radius: 20px;
  overflow: hidden;
  width: 33px;
  height: 33px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`

const MateName = styled.div`
  margin-left: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #3c3c3c;
  cursor: pointer;
`

const MateTags = styled.div`
  font-size: 16px;
  color: #3c3c3c;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 30px;
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
const MatePresenter = ({ status, loading }) => (
  <>
    <Helmet>
      <title>Mates | Teamate</title>
    </Helmet>
    <ItemCard>
      <MateCard>
        {/* TODO: 메이트 디비에서 받아와서 카드에 데이터바인딩 */}
        <MateImage> </MateImage>
        <MateRole> Developer</MateRole>
        <MateName> 김가현 </MateName>

        <MateTags>#React #Nodejs #JavaScript</MateTags>
        <BottomSection> 
          <LastEdited>3분 전 업데이트</LastEdited>
          <BookmarkIcon> <i class="far fa-bookmark"></i> </BookmarkIcon>
        </BottomSection>
      </MateCard>
    </ItemCard>
    {loading ? <ProgressIndicator /> : <Container></Container>}
  </>
);

export default MatePresenter;