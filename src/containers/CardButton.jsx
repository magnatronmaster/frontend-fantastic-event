import React from 'react';
import { AnchorButton } from 'assets/GlobalStyles.js';

import { device } from 'assets/Breakpoints';

import styled from 'styled-components';

const ContainerCard = styled.div`
  width: 75%;
  justify-self: center;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding: 20px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: fit-content;

  @media ${device.tablet} {
    margin: 20px 0;
  }
`;

const Name = styled.h3`
  text-align: center;
`;

export const CardButton = ({ name, href, text }) => {
  return (
    <ContainerCard>
      <Name>{name}</Name>
      <AnchorButton to={href}>{text}</AnchorButton>
    </ContainerCard>
  );
};
