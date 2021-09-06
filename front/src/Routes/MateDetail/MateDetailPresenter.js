import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

const MateSection = styled.div`
  padding: 50px 200px;
  justify-content: space-around;
  display: flex;
`

const MateLeft = styled.div`
  padding-right: 50px;
`

const MateRight = styled.div`
  text-align: center;
`

const MateName = styled.div`
  font-size: 26px;
  font-weight: 400;
`
const MateRole = styled.div`
  font-size: 14px;
  color: #b1b1b1;
  display: inline-block;
  padding-left: 10px;
`

const MateRateNum = styled.span`
  font-size: 17px;
  font-weight: 100;
`

const MateRate = styled.span`
  float: right;
`

const MateTags = styled.span`
  float: left;
  background-color: #2AC1BC;
  padding: 2px 10px;
  font-size: 12px;
  color: white;
  text-align: center;
  border-radius: 15px;
  margin-right: 7px;
  margin-top: 10px;
`

const MateIntroduce = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: 24px;
  margin-top: 80px;
` 
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
`

const MateProfileEdit = styled.span`
  color: #b1b1b1;
  font-size: 12px;
  cursor: pointer;
`

const MateProjectSection = styled.div`
padding: 50px 200px;
`
const MateProjectSectionTitle = styled.div`  
  margin: 30px 20px 50px;
  font-size: 17px;
  font-weight: 700;
`

const ProjectShowMore = styled.div`
  text-align: center;
`


const MateDetailPresenter = ({email, name, profile, role, introduce, tags, projects, rates}) => (
  <>      
    <MateSection>
      <MateLeft>
        <MateName>
          김가현
          <MateRole> 개발자 </MateRole>
          <MateRate> 
            ⭐️ <MateRateNum>4.7</MateRateNum>
          </MateRate>
        </MateName>
        <MateTags> #React  </MateTags>
        <MateTags> #NodeJS  </MateTags>
        <MateTags> #RubyOnRails   </MateTags>


        <MateIntroduce>
          안녕하세요 자기소개입니다. 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳
          세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며많이 
          품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 
          석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며<br/>
          <br/>
          - 망포고 2012.03.02~2015.02.12 <br/>
          - 아주대 2015.03.02~2021.02.22<br/>
          - 전체평점 3.44 / 4.5<br/>
          - 파란학기제 2위 수상 - 블록체인과 하드웨어 연결 (블루프린트)<br/>
              - 2018-12-07 수상<br/>
          - 미디어프로젝트 - 블록체인 기반 웹서비스 (티메이트)<br/>
          - 2018 추계 정보처리학회- 학술대회 논문 발표 (1) 블루프린트<br/>
              - "이더리움 스마트 컨트랙트 기반 자동 프린터 관리 시스템"<br/>
          - 2019 한국정보과학회- 학술대회 논문 발표 (2) 티메이트<br/>
              - "이더리움 스마트 컨트랙트 기반 팀 빌딩 및 매칭 시스템"<br/>
          - 정보통신산업진흥원 블록체인 국비교육 예제프로그램 작성, 조교활동<br/>
          - 한동대학교, 경북대학교 블록체인 국비교육 강의조교<br/>
          - 대전 소프트웨어 마이스터고등학교 블록체인 교육 강의<br/>
        </MateIntroduce>
      </MateLeft>
      <MateRight>
        <MateProfile>
          {/* 프사 */}
        </MateProfile>
        <MateProfileEdit> 프로필 편집 </MateProfileEdit> 
      </MateRight>
    </MateSection>

    <MateProjectSection>
      <MateProjectSectionTitle>
        진행중인 프로젝트
      </MateProjectSectionTitle>
      <ProjectShowMore> 더보기 </ProjectShowMore>

      <MateProjectSectionTitle>
        완료한 프로젝트
      </MateProjectSectionTitle>

      <ProjectShowMore> 더보기 </ProjectShowMore>
    </MateProjectSection>
  </>
);

export default MateDetailPresenter;