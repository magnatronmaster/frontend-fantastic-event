import React from 'react';

import { LogoContainer, LogoImage } from 'assets/GlobalStyles';
import {
  FooterContainer,
  ContainerList,
  FooterText,
  ContainerFlex,
} from './styles';

import WhiteLogo from 'assets/images/logoBlanco.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src={WhiteLogo} />
      </LogoContainer>
      <FooterText>Organiza eventos inolvidables</FooterText>
      <ContainerFlex>
        <ContainerList>
          <li>Angel Castiblanco</li>
          <li>Angel Castiblanco</li>
          <li>Angel Castiblanco</li>
        </ContainerList>
        <ContainerList>
          <li>Angel Castiblanco</li>
          <li>Angel Castiblanco</li>
          <li>Angel Castiblanco</li>
        </ContainerList>
        <ContainerList>
          <LogoContainer>
            <LogoImage src={WhiteLogo} />
          </LogoContainer>
          <p>Magnatron</p>
        </ContainerList>
      </ContainerFlex>
    </FooterContainer>
  );
};
