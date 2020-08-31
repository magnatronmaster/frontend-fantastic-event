import React from 'react';
import { HeaderHomeContainer } from './styles';

import { AnchorButton } from 'assets/GlobalStyles';

export const HeaderHome = () => {
  return (
    <HeaderHomeContainer>
      <AnchorButton to="/login">¡Empieza tu evento personalizado!</AnchorButton>
    </HeaderHomeContainer>
  );
};
