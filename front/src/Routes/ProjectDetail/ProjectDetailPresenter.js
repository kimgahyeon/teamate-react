import React from "react";
import styled from "styled-components";

const ProjectDetailSection = styled.div`
padding: 50px 120px;
`
const ProjectDetailTitle = styled.div`
font-size: 20px;
font-weight: 600;
`

const ProjectDetailSub = styled.div`
margin-top: 15px;
display: inline-block;
`
const ProjectDetailTags = styled.span`
float: left;
background-color: #2AC1BC;
padding: 2px 10px;
font-size: 12px;
color: white;
text-align: center;
border-radius: 15px;
`

const ProjectDetailPresenter = () => (
<>
  <ProjectDetailSection> 
    <ProjectDetailTitle>
      프로젝트 제목
    </ProjectDetailTitle>
    <ProjectDetailSub>
      <ProjectDetailTags>
        #React
      </ProjectDetailTags>
      <ProjectDetailTags>
        #Nodejs
      </ProjectDetailTags> 


    </ProjectDetailSub>
  </ProjectDetailSection>
  
</>
);

export default ProjectDetailPresenter;