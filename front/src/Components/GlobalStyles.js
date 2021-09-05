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

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
}

  .modal button {
    display: block;
    background-color: #565656;
    color: #ffffff;
    height: 58px;
    border-radius: 4px; 
    margin-top: 7px;
    font-size: 15px;
    line-height: 58px;
    width: 100%;  
    outline: none;
    cursor: pointer;
    border: 0;
  }

  .submitButton:hover{
    background-color: #218c74;
  }

  .modal > section {
    width: 90%;
    max-width: 450px;
    margin:0 auto;
    border-radius: .3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show .3s;
    overflow: hidden;
  }

  .modal > section > header {
    position: relative;
    margin-top: 60px;
    color:#3c3c3c;
    font-weight: 900;
    font-size: 18px;
    text-align: center;
    
  }

  .modal .error_sign {
    margin-top: 8px;
    margin-bottom: 40px;
    font-size: 14px;
    color: #E83442;
  }

  .modal > section > header button {
    margin-top: -60px;
    position: absolute;
    right: 20px;
    width: 30px;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  
  .modal > section > main {
    padding: 35px 35px 25px;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show .3s;
  }

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
