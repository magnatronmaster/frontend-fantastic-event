import { createGlobalStyle } from 'styled-components';
import './variables.css';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

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
        font-weight: 500;
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

const ButtonDesign = (props) => `
  background-color: #a8071e;
  color: white;
  border: 0;
  height: 50px;
  width: 60%;
  border-radius: 5px;
  display: block;
  margin: 1.5em auto;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    background: #530e37;
  }
`;

export const Button = styled.button`
  ${ButtonDesign}
`;

export const AnchorButton = styled(Link)`
  ${ButtonDesign}
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginRegisterContainer = styled.section`
  grid-row: 1/4;
  display: flex;
`;

export const LogoContainer = styled.figure`
  width: fit-content;
  margin: auto;
`;

export const LogoImage = styled.img`
  max-width: 200px;
  height: auto;
`;

export const Contain = styled.div`
  max-width: 440px;
  margin: auto;
`;

export const Form = styled.form``;

export const TitleForm = styled.h2`
  width: fit-content;
  margin: 20px auto;
`;

export const LabelForm = styled.label`
  font-size: 24px;
`;

export const InputForm = styled.input`
  background: transparent;
  border-color: transparent;
  border-bottom: 1px solid black;
  width: 100%;
  margin: 10px 0 40px;
  :focus {
    outline: none;
  }
`;
export const AnchorLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto 6px;
  color: var(--dark-color);
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
`;
