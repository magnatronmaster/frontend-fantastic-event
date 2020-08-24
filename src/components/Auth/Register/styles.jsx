import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const RegisterPageContainer = styled.section`
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

export const FormRegister = styled.form``;

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
  margin: 6px auto;
  color: var(--dark-color);
`;

export const SendForm = styled.button`
  background: #a8071e;
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
