import React from 'react';

import { Button, AnchorButton } from 'assets/GlobalStyles';

import {
  EditEventContainer,
  TemplateImageContainer,
  BasicData,
  BasicDataContain,
} from './styles';

import TemplateImage from 'assets/images/plantilla.png';
export const FormEditEvent = ({ data }) => {
  const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(data.date_end_event);

  return (
    <>
      <EditEventContainer>
        <BasicData>
          <BasicDataContain>
            <h3>{data.name_event}</h3>
            <h4>Descripción del evento</h4>
            <p>{data.description_event}</p>
            <h4>Fecha</h4>
            <p>{date.toLocaleDateString('es-ES', option)}</p>
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
