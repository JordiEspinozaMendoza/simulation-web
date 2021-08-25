import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
    html{
        box-sizing: border-box;
        font-size: 16px;
    }
    *,*::before,*::after{
        box-sizing: inherit;
    }
    body{
        font-family: ${primaryFont};
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    main {
        margin: 0 auto;
    }
    `;
