import { createGlobalStyle } from "styled-components";

const Global_Style = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&display=swap');

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
  }
`;

export default Global_Style;
