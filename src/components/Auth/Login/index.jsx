import React from 'react';

import { Link } from 'react-router-dom';
import {
  LoginPageContainer,
  Contain,
  FormLogin,
  LogoImage,
  TitleForm,
  LabelForm,
  InputForm,
  AnchorLink,
  SendForm,
  LogoContainer,
} from './styles';

import Logo from 'assets/images/logo.png';

export const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <LoginPageContainer>
      <Contain>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
        </LogoContainer>
        <FormLogin>
          <TitleForm>Ingresar</TitleForm>
          <LabelForm for="email">Correo Electronico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingresa el nombre de usuario"
            name="email"
          />
          <LabelForm for="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingresa la contraseña"
            name="password"
            type="password"
          />
          <AnchorLink>¿Olvidó su contraseña?</AnchorLink>
          <AnchorLink to="/register">¿No tienes cuenta? Registrate</AnchorLink>
          <SendForm onClick={handleClick}>Ingresar</SendForm>
        </FormLogin>
      </Contain>
    </LoginPageContainer>
  );
};
