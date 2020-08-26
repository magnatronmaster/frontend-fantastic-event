import React from 'react';
import { AnchorButton } from 'assets/GlobalStyles.js';

import styled from 'styled-components';

const ContainerCard = styled.div`
  width: 75%;
  justify-self: center;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding: 20px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Name = styled.h3`
  text-align: center;
`;

export const CardButton = ({ name, href }) => {
  return (
    <ContainerCard>
      <Name>{name}</Name>
      <AnchorButton to={href}>Ver Organización</AnchorButton>
    </ContainerCard>
  );
};
