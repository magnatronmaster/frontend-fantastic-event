import React from 'react';
import { HeaderHomeContainer } from './styles'

import {
    InputForm,
    LabelForm,
    Button,
    ModalContainer,
    ModalContain,
    TitleModal,
    CloseModal,
    InputTextArea,
  } from 'assets/GlobalStyles';


export const HeaderHome = () => {
    return (
        <HeaderHomeContainer>
            {/* <img src = {homeImage} width = "100%"></img> */}
            <Button to="/login"> empieza tu evento </Button>
        </HeaderHomeContainer>
    )
}