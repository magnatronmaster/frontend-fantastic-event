import React from 'react';

import { Button, AnchorButton } from 'assets/GlobalStyles';

import {
  EditEventContainer,
  TemplateImageContainer,
  BasicData,
  BasicDataContain,
} from './styles';

import TemplateImage from 'assets/images/plantilla.png';
export const FormEditEvent = () => {
  return (
    <>
      <EditEventContainer>
        <BasicData>
          <BasicDataContain>
            <h3>Titulo del evento</h3>
            <h4>Descripción del evento</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum
              quam reprehenderit est odit rem. Totam tenetur, sint ullam
              corporis cupiditate eius quae recusandae excepturi magni deleniti,
              magnam similique tempore.
            </p>
            <h4>Fecha</h4>
            <p>15 de diciembre del 2020</p>
            <Button>Editar evento</Button>
          </BasicDataContain>
          <TemplateImageContainer>
            <img src={TemplateImage} />
          </TemplateImageContainer>
        </BasicData>
        <AnchorButton width="40%" to="/lecturers">
          Conferencistas
        </AnchorButton>
        <AnchorButton width="40%" to="/conferences">
          Agenda
        </AnchorButton>
        <AnchorButton width="40%" to="/sponsors">
          Asociados
        </AnchorButton>
        <Button>Publicar Evento</Button>
      </EditEventContainer>
    </>
  );
};
