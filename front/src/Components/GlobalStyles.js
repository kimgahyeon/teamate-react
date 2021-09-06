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
    overflow-x: hidden !important;
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

  @keyframes modal-hide {
    from {
      opacity: 1;
      margin-top: 0;
    }
    to {
      opacity: 0;
      margin-top: -50px;
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

  @keyframes modal-bg-hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
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

  // Dropdown
  .menu-container {
    position: relative;
  }

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: -20px;
    width: 140px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }
  
  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    border-bottom: 1px solid #dddddd;
  }
  
  .menu li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }

  .menu-trigger {
    background-size: cover;
    width: 40px; 
    height: 40px;
    border-radius: 90px;
    cursor: pointer;
    margin-top: 3px;  
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
  }
  
  .menu-trigger:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

`;

export default globalStyles;
