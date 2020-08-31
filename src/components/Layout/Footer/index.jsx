import React from 'react';

import { LogoContainer, LogoImage } from 'assets/GlobalStyles';
import {
  FooterContainer,
  ContainerList,
  FooterText,
  ContainerFlex,
  ContainerColumn,
  LogoContainerWithText,
} from './styles';

import WhiteLogo from 'assets/images/logoBlanco.svg';
import LogoPlatzi from 'assets/images/PlatziMaster.png';

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainerWithText>
        <LogoImage src={WhiteLogo} maxWidth="150px" />
        <FooterText>Organiza eventos inolvidables</FooterText>
      </LogoContainerWithText>

      <ContainerFlex>
        {/* <ContainerColumn>
          <h4>Frontend</h4>
          <ContainerList>
            <li>Angel Castiblanco</li>
            <li>Nelson Alayon</li>
            <li>Jaime Piratova</li>
          </ContainerList>
        </ContainerColumn> */}
        {/* <ContainerColumn>
          <h4>Backend</h4>
          <ContainerList>
            <li>Luis Lazcano</li>
            <li>Julian Builes</li>
          </ContainerList>
        </ContainerColumn> */}
        <ContainerColumn>
          <ContainerList>
            <p>Magnatron 2020</p>
          </ContainerList>
        </ContainerColumn>
      </ContainerFlex>
    </FooterContainer>
  );
};
