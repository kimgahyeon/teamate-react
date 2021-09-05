import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

const MateSection = styled.div`
  padding: 50px 120px;

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
const MateTags = styled.span`
  float: left;
  background-color: #2AC1BC;
  padding: 2px 10px;
  font-size: 12px;
  color: white;
  text-align: center;
  border-radius: 15px;
`

const MateRate = styled.div`
  // Mate의 Rates의 평균값을 서버에서 받아와야함
  
`
const MateIntroduce = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: 20px;
` 
const MateProfile = styled.img`

`
const MateDetailPresenter = ({email, name, profile, role, introduce, tags, projects, rates}) => (
  <>      
    <MateSection>
      <MateName>
        김가현
        <MateRole> 개발자 </MateRole>
      </MateName>
    </MateSection>
  </>
);

export default MateDetailPresenter;