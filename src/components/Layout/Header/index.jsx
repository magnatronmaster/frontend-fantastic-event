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
  return (
    <HeaderContainer>
      <figure>
        <LogoImage src={Logo} />
      </figure>
      <MenuContainer>
        <HeaderMenuList>
          <HeaderMenuItem>
            <HeaderMenuLink to="/login">Ingresar</HeaderMenuLink>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <HeaderMenuLink to="/register">Registrarse</HeaderMenuLink>
          </HeaderMenuItem>
        </HeaderMenuList>
      </MenuContainer>
    </HeaderContainer>
  );
};
