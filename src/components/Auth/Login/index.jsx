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

export const Login = () => {
  const [form, setValues] = useState();

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Sign In
  const handleSubmit = async (e) => {
    e.preventDefault();
    swal({
      title: 'Estamos validando tus datos',
      icon: Loader,
      button: false,
    });
    console.log(form);
    let encoded = window.btoa(`${form.email_user}:${form.password_user}`);
    let requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: new Headers({
        Authorization: `Basic ${encoded}`,
      }),
    };

    await fetch(`${process.env.URL_API}auth/sign-in/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token !== undefined) {
          swal({
            title: 'Te has logueado correctamente',
            icon: 'success',
            button: false,
          });

          localStorage.setItem('token_user', data.token);
          localStorage.setItem('id_user', data.user.id_user);
          localStorage.setItem('email_user', data.user.email_user);

          setTimeout(() => {
            location.href = '/dashboard';
          }, 2000);
        }
      })
      .catch((error) => console.error('error', error));

    //   await fetch(`${process.env.URL_API}/auth/sign-in/`, {
    //     headers: new Headers({
    //       Authorization: `Basic ${base64.encode(
    //         `${form.email_user}:${form.password_user}`
    //       )}`,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error(error));
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
          <TitleForm>Ingresar</TitleForm>
          <LabelForm htmlFor="email">Correo Electronico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingresa el nombre de usuario"
            name="email_user"
            onChange={handleChange}
            required
          />
          <LabelForm htmlFor="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingresa la contraseña"
            name="password_user"
            type="password"
            onChange={handleChange}
            required
          />
          <AnchorLink>¿Olvidó su contraseña?</AnchorLink>
          <AnchorLink to="/register">¿No tienes cuenta? Registrate</AnchorLink>
          <Button>Ingresar</Button>
        </Form>
      </Contain>
    </LoginRegisterContainer>
  );
};
