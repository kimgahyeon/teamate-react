import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    position: relative;
    height: 100px;
    font-weight: 700;
    border-top: 1px solid #EFEFEF;
    line-height: 50px;
    text-align: center;
    padding-top: 10px;
`

const FooterInner = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
    font-size: 14px;
`

const FooterMenu = styled.div`
    float: right;
    color: #b1b1b1;
`
const FooterMenuLi = styled.li`
    margin: 0px 15px;
    display: inline;
`

const FooterLogo = styled.div`
    float: left;
    color: #2AC1BC;
    font-weight: 700;
    font-size: 18px;
`

const FooterInfo = styled.div`
    clear: both;
    line-height: 22px;
    font-size: 12px;
    text-align: left;
    color: #b1b1b1;
`
const Footer = ({}) => {
    return(
        <>
        <FooterContainer>
            <FooterInner>
                <FooterLogo> Teamate </FooterLogo> 
                <FooterMenu> 
                    <ul>
                        <FooterMenuLi>
                            유튜브
                        </FooterMenuLi>
                        <FooterMenuLi>
                            인스타
                        </FooterMenuLi>
                        <FooterMenuLi>
                            페이스북
                        </FooterMenuLi>
                        <FooterMenuLi>
                            DMC Lab.
                        </FooterMenuLi>
                    </ul>
                </FooterMenu>     
                <FooterInfo>
                    정보정보 입력입력 시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만 구할 수 있는 것이다. 
                </FooterInfo>
            </FooterInner>

        </FooterContainer>
        </>
    )
}

export default Footer;