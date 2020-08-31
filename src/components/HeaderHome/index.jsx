import React from 'react';
import { HeaderHomeContainer } from './styles'

import {    
    Button    
  } from 'assets/GlobalStyles';


export const HeaderHome = () => {
    return (
        <HeaderHomeContainer>
            
            <Button to="/login"> empieza tu evento </Button>
        </HeaderHomeContainer>
    )
}