import { createGlobalStyle } from 'styled-components';
import './variables.css';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
        grid-template-rows: 100px 1fr auto;
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

//Components for logo (figure and image)
export const LogoContainer = styled.figure`
  width: fit-content;
  margin: auto;
`;

export const LogoImage = styled.img`
  max-width: ${(props) => props.maxWidth || '200px'};
  height: auto;
`;

// globals buttons for any component
export const Button = styled.button`
  ${ButtonDesign}
`;

export const AnchorButton = styled(Link)`
  ${ButtonDesign}
  margin: ${(props) => props.margin || '1.5em auto;'};
  width: ${(props) => props.width || '60%;'};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// global components for forms (inputs, containers, etc.)
export const LoginRegisterContainer = styled.section`
  grid-row: 1/4;
  display: flex;
`; // This is for the login and register pages

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
  border-bottom: ${(props) => props.border || '1px'} solid black;
  width: 100%;
  margin: ${(props) => props.margin || '10px 0 40px'};
  :focus {
    outline: none;
  }
`;

export const InputTextArea = styled.textarea`
  background: transparent;
  border-color: transparent;
  border-bottom: 1px solid black;
  width: 100%;
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

// Container cards for This is for the login and register pages
export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
`;

//Modals
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContain = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 1rem;
  max-width: ${(props) => props.width || '400px;'};
  border-radius: 10px;
`;

export const TitleModal = styled.h2`
  margin-top: 0;
`;

export const CloseModal = styled.span`
  display: block;
  text-align: right;
  cursor: pointer;
  width: fit-content;
  margin-left: auto;
`;
