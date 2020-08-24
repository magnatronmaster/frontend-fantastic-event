import React from 'react';

import { Link } from 'react-router-dom';
import {
  RegisterPageContainer,
  Contain,
  FormRegister,
  LogoImage,
  TitleForm,
  LabelForm,
  InputForm,
  AnchorLink,
  SendForm,
  LogoContainer,
} from './styles';

import Logo from 'assets/images/logo.png';

export const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <RegisterPageContainer>
      <Contain>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
        </LogoContainer>
        <FormRegister>
          <TitleForm>Registrarse</TitleForm>
          <LabelForm for="email">Correo Electronico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingresa el correo electronico"
            name="email"
            type="email"
          />
          <LabelForm for="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingresa la contraseña"
            name="password"
            type="password"
          />
          <LabelForm for="confirmPassword">Confirmar Contraseña</LabelForm>
          <InputForm
            id="confirmPassword"
            placeholder="Ingresa nuevamente la contraseña"
            name="confirmPassword"
          />
          <AnchorLink to="/login">¿Eres miembro? Ingresa aquí</AnchorLink>
          <SendForm onClick={handleClick}>Registrarse</SendForm>
        </FormRegister>
      </Contain>
    </RegisterPageContainer>
  );
};
