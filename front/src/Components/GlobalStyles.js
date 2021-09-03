import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -Arial, Helvetica, sans-serif;
    font-size: 12px;
    background-color: white;
    color: black;
    padding-top: 50px;
  }
`;

export default globalStyles;

