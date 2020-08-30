import React from 'react';

import {
  HeaderContainer,
  MenuContainer,
  LogoImage,
  HeaderMenuList,
  HeaderMenuItem,
  HeaderMenuLink,
} from './styles';

import Logo from 'assets/images/logo.png';

export const Header = () => {
  const handleSignOut = () => {
    location.href = '/';
    window.localStorage.clear();
  };
  const session = () => {
    const { id_user } = window.localStorage;
    if (id_user !== undefined) {
      return (
        <>
          <HeaderMenuItem>Bievenido</HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderMenuLink onClick={handleSignOut}>
              Cerrar sesión
            </HeaderMenuLink>
          </HeaderMenuItem>
        </>
      );
    }
    return (
      <>
        <HeaderMenuItem>
          <HeaderMenuLink to="/login">Ingresar</HeaderMenuLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuLink to="/register">Registrarse</HeaderMenuLink>
        </HeaderMenuItem>
      </>
    );
  };

  return (
    <HeaderContainer>
      <figure>
        <LogoImage src={Logo} />
      </figure>
      <MenuContainer>
        <HeaderMenuList>{session()}</HeaderMenuList>
      </MenuContainer>
    </HeaderContainer>
  );
};
