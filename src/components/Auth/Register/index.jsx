import React, { useState } from 'react';

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
  const [form, setValues] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await fetch('https://event-app-72617.uc.r.appspot.com/api/users', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <LoginRegisterContainer>
      <Contain>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
        </LogoContainer>
        <Form onSubmit={handleSubmit}>
          <TitleForm>Registrarse</TitleForm>
          <LabelForm htmlFor="email_user">Correo Electronico</LabelForm>
          <InputForm
            onChange={handleInput}
            id="email"
            placeholder="Ingresa el correo electronico"
            name="email_user"
            type="email"
          />
          <LabelForm htmlFor="password_user">Contraseña</LabelForm>
          <InputForm
            onChange={handleInput}
            id="password_user"
            placeholder="Ingresa la contraseña"
            name="password_user"
            type="password"
          />
          <LabelForm htmlFor="confirmPassword">Confirmar Contraseña</LabelForm>
          <InputForm
            id="confirmPassword"
            placeholder="Ingresa nuevamente la contraseña"
            name="confirmPassword"
          />
          <AnchorLink to="/login">¿Eres miembro? Ingresa aquí</AnchorLink>
          <Button>Registrarse</Button>
        </Form>
      </Contain>
    </LoginRegisterContainer>
  );
};
