import React, { useState } from 'react';
import swal from 'sweetalert';
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
import Loader from 'assets/images/loader.gif';

export const Register = () => {
  const [form, setValues] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    swal({
      title: 'Estamos validando tus datos',
      icon: Loader,
      button: false,
    });
    if (form.password_user !== form.confirmPassword) {
      swal({
        title: 'Las contraseñas no coinciden',
        icon: 'warning',
        button: 'Cerrar',
      });
    } else {
      setValues(delete form.confirmPassword);
      await fetch(`${process.env.URL_API}auth/sign-up/`, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.message === 'user created') {
            swal({
              title: 'Te has registrado correctamente',
              text: 'Tus datos se han almacenado',
              icon: 'success',
              button: false,
            });

            setTimeout(() => {
              location.href = '/login';
            }, 2000);
          } else if (data.message === 'email_user already exists') {
            swal({
              title: 'El correo electronico ya está registrado',
              text: 'Intenta nuevamente con un correo electronico diferente',
              icon: 'warning',
              button: '¡OK!',
            });
          }
        })
        .catch((error) => console.error(error));
    }
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
            required
          />
          <LabelForm htmlFor="password_user">Contraseña</LabelForm>
          <InputForm
            onChange={handleInput}
            id="password_user"
            placeholder="Ingresa la contraseña"
            name="password_user"
            type="password"
            required
          />
          <LabelForm htmlFor="confirmPassword">Confirmar Contraseña</LabelForm>
          <InputForm
            id="confirmPassword"
            onChange={handleInput}
            placeholder="Ingresa nuevamente la contraseña"
            name="confirmPassword"
            type="password"
            required
          />
          <AnchorLink to="/login">¿Eres miembro? Ingresa aquí</AnchorLink>
          <Button>Registrarse</Button>
        </Form>
      </Contain>
    </LoginRegisterContainer>
  );
};
