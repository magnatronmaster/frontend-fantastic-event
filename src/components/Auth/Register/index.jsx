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

export const Register = () => {
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
          <TitleForm>Registrarse</TitleForm>
          <LabelForm htmlFor="email">Correo Electronico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingresa el correo electronico"
            name="email"
            type="email"
          />
          <LabelForm htmlFor="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingresa la contraseña"
            name="password"
            type="password"
          />
          <LabelForm htmlFor="confirmPassword">Confirmar Contraseña</LabelForm>
          <InputForm
            id="confirmPassword"
            placeholder="Ingresa nuevamente la contraseña"
            name="confirmPassword"
          />
          <AnchorLink to="/login">¿Eres miembro? Ingresa aquí</AnchorLink>
          <Button onClick={handleClick}>Registrarse</Button>
        </Form>
      </Contain>
    </LoginRegisterContainer>
  );
};
