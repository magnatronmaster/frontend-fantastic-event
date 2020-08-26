import React from 'react';

import { Link } from 'react-router-dom';

import {
  Button,
  LoginRegisterContainer,
  Contain,
  Form,
  LogoImage,
  TitleForm,
  LabelForm,
  InputForm,
  AnchorLink,
  LogoContainer,
} from 'assets/GlobalStyles';

import Logo from 'assets/images/logo.png';

export const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <LoginRegisterContainer>
      <Contain>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
        </LogoContainer>
        <Form>
          <TitleForm>Ingresar</TitleForm>
          <LabelForm htmlFor="email">Correo Electronico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingresa el nombre de usuario"
            name="email"
          />
          <LabelForm htmlFor="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingresa la contraseña"
            name="password"
            type="password"
          />
          <AnchorLink>¿Olvidó su contraseña?</AnchorLink>
          <AnchorLink to="/register">¿No tienes cuenta? Registrate</AnchorLink>
          <Button onClick={handleClick}>Ingresar</Button>
        </Form>
      </Contain>
    </LoginRegisterContainer>
  );
};
