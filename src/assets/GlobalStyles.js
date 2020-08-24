import { createGlobalStyle } from 'styled-components';
import './variables.css';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@400;600&display=swap');
    body {
        background-color: var(--background-white);
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    figure {
        margin: 0;
    }
    h1, h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    h2 {
        font-size: 40px;
    }
    h3 {
        font-size: 24px;
    }
    button {
        font-size: 17px;
    }
    a {
        text-decoration: none;
    }
    ::placeholder {
    font-size: 14px;
    color: var(--cian-color);
  }
    #app {
        max-width: 1200px;
        margin: auto;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 100px 1fr 80px;
    }
    `;
