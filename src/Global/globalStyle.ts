import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inter;
  
    
}
img{
      max-width: 100%;
      max-height: 100%;
    }

  html, body {
   width: 100vw;
   height: 100vh;
  }
  ul{list-style: none;}
`;

export default GlobalStyle;
