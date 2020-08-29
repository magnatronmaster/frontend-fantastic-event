import React from 'react';

import { LogoContainer, LogoImage } from 'assets/GlobalStyles';
import {
  FooterContainer,
  ContainerList,
  FooterText,
  ContainerFlex,
  ContainerColumn,
} from './styles';

import WhiteLogo from 'assets/images/logoBlanco.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src={WhiteLogo} width="150px" />
      </LogoContainer>
      <FooterText>Organiza eventos inolvidables</FooterText>
      <ContainerFlex>
        <ContainerColumn>
          <h4>Frontend</h4>
          <ContainerList>
            <li>Angel Castiblanco</li>
            <li>Angel Castiblanco</li>
            <li>Angel Castiblanco</li>
          </ContainerList>
        </ContainerColumn>
        <ContainerColumn>
          <h4>Backend</h4>
          <ContainerList>
            <li>Angel Castiblanco</li>
            <li>Angel Castiblanco</li>
            <li>Angel Castiblanco</li>
          </ContainerList>
        </ContainerColumn>
        <ContainerColumn>
          <ContainerList>
            <LogoContainer>
              <LogoImage src={WhiteLogo} />
            </LogoContainer>
            <p>Magnatron 2020</p>
          </ContainerList>
        </ContainerColumn>
      </ContainerFlex>
    </FooterContainer>
  );
};
