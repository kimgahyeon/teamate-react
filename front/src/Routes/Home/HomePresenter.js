import React from "react";
import styled, { keyframes } from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";
import Slider from "react-slick";
import ProjectCard from "Components/ProjectCard";
import MateCard from "Components/MateCard";

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

const Section = styled.div`
  width: 100%;
  margin: 0px auto;
  background-color: #fafafa;
  text-align: center;
  padding: 15px 80px 50px;
`

const SectionTitle = styled.div`
  text-align: left;
  margin: 30px 20px 50px;
  font-size: 17px;
  font-weight: 700;
`

const Copy = styled.div`
  width: 100%;
  margin: 0px auto;
  background-color: #fafafa;
  text-align: center;
  background-color: #2AC1BC;
  padding: 100px 0px;
  margin-bottom: 0px !important;
`

const CopySubtitle = styled.div`
  color: #ffffff;
  font-weight: 700;
`

const CopyTitle = styled.div`
  color: #565656;
  margin: 20px 0px;
  font-size: 22px;
  font-weight: 700;
`

const CopyDesc = styled.div`
  margin: 14px 0px 30px;  
  font-size: 15px;
  line-height: 35px;
`
const StartBtn = styled.span`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  width: 180px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
  cursor: pointer;
`
const IconWrapper = styled.div`
  justify-content: space-around;
  display: flex;

`
const IconContainer = styled.div`
  text-align: center;
`

const Icon = styled.div`
  font-size: 50px;
`

const IconTitle = styled.div`
  font-size: 18px;
  margin-top: 30px;
  font-weight: 700;

`
const IconDesc = styled.div`
  font-size: 14px;
  padding: 0 80px;
  margin-top: 20px;
  line-height: 20px;
`
const ImageContainer = styled.div`
  height: 100vh;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  object-fit: fill;
`
const HomePresenter = ({ loading, projects, mates }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 마우스 올렸을 때 autoplay 멈춤
    dotsClass: "slick-dots",
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  }

  const images = [
    "picture1.jpg", "picture2.jpg","picture3.jpg"
  ];

  return (
    <>
      <Helmet>
        <title>Teamate </title>
      </Helmet>
      <Slider {...settings}>
        {images.map((image, index) => {
          const src = require(`assets/${image}`).default;
          return (<div style="height: calc(100vh - 56px);" key={index}>
            <ImageContainer>
              <Image src={src} />
            </ImageContainer>
          </div>);
        })}
      </Slider>

      <Section>
        <SectionTitle>
          서비스 소개
        </SectionTitle>

        <IconWrapper>
          <IconContainer>
            <Icon><i class="far fa-address-card"></i> </Icon>
            <IconTitle> 메이트 등록 </IconTitle>
            <IconDesc>시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만 구할 수 있는 것이다.  </IconDesc>
          </IconContainer>

          <IconContainer>
            <Icon><i class="fab fa-angellist"></i> </Icon>
            <IconTitle> 프로젝트 모집 </IconTitle>
            <IconDesc>시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만 구할 수 있는 것이다.  </IconDesc>
          </IconContainer>

          <IconContainer>
            <Icon><i class="far fa-star"></i> </Icon>
            <IconTitle> 별점 주기 </IconTitle>
            <IconDesc>시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만 구할 수 있는 것이다.  </IconDesc>
          </IconContainer>
        </IconWrapper>

      </Section>
      <Copy>
        <CopySubtitle>
          Start With Teamate
        </CopySubtitle>
        <CopyTitle>
          Hyperledger Fabric
        </CopyTitle>
        <CopyDesc>
          대충 블록체인 왜 쓰는지 어떻게 썼는지 쓰면 뭐가 좋은지 설명  <br />
          시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만 구할 수 있는 것이다 청춘은 인생의 황금시대다
        </CopyDesc>
        <StartBtn> Start Now </StartBtn>
      </Copy>

      <Section>
        <SectionTitle>
          기대되는 새로운 프로젝트
        </SectionTitle>
        <Container>
          {projects && projects.length > 0 && projects.map((project) => (<ProjectCard {...project} />))}

        </Container>
      </Section>

      <Section>
        <SectionTitle>
          이번 주 메이트 추천
        </SectionTitle>
        <Container>
          {mates && mates.length > 0 && mates.map((mate) => (<MateCard {...mate} />))}
        </Container>
      </Section>

      {/* </Container> */}
      {loading ? <ProgressIndicator /> : <Container>{loading}</Container>}
      {console.log(loading)}
    </>
  );
};
export default HomePresenter;
