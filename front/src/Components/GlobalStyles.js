import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const globalStyles = createGlobalStyle`
  ${reset};
  @import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
  
  // 0. carousel
  import "~slick-carousel/slick/slick.css"; 
  import "~slick-carousel/slick/slick-theme.css";
  
  // 1. global
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'NanumSquare', sans-serif;
    font-size: 12px;
    background-color: #fafafa;
    color: black;
    padding-top: 50px;
    width: 100%;
    overflow: auto !important;
    position: unset !important;
  }


  // 3. modal 

  @keyframes modal-show {
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }

  .inputMateInfo{
    width: 100%;
    height: 43px;
    padding-left: 17px;
    border: none;
    border-bottom: 1px solid #EFEFEF;
    margin: 7px 0px;
  }

  .checkMate{
    margin-top: 30px;
    font-size: 13px;
    cursor: default;
  }

  .checkMate .checkMateLink{
    display: inline;
    cursor: pointer !important;
    border-bottom: 1px solid;
  }

`;

export default globalStyles;
