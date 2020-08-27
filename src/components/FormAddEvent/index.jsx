import React from 'react';

import {
  Button,
  Form,
  TitleForm,
  LabelForm,
  InputForm,
  AnchorButton,
} from 'assets/GlobalStyles';

import { FormAddEventContainer, TemplateImageContainer } from './styles';

export const FormAddEvent = () => {
  return (
    <FormAddEventContainer>
      <Form>
        <TitleForm>¡Configura tu evento!</TitleForm>
        <LabelForm htmlFor="eventName">Nombre del Evento</LabelForm>
        <InputForm
          id="eventName"
          placeholder="Escribel el titulo de tu evento "
          name="eventName"
        />
        <LabelForm htmlFor="description">
          Da una descripción del evento
        </LabelForm>
        <InputForm
          id="description"
          placeholder="Ingresa una descripción"
          name="description"
          type="text"
        />
        <LabelForm htmlFor="address">Ingresa la dirección del evento</LabelForm>
        <InputForm
          id="address"
          placeholder="Ingresa una dirección"
          name="address"
          type="text"
        />
        <LabelForm htmlFor="date">Selecciona una fecha</LabelForm>
        <InputForm
          id="date"
          placeholder="Ingresa una fecha"
          name="date"
          type="date"
        />
        <LabelForm htmlFor="organizers">Invita organizadores</LabelForm>
        <InputForm
          id="organizers"
          placeholder="Ingresa los emails de los organizadores del evento"
          name="organizers"
          type="text"
          margin="10px 0 20px"
        />
        <AnchorButton to="/addLecturers" margin="10px">
          Conferencistas
        </AnchorButton>
        <AnchorButton margin="10px" to="/addConferences">
          Agenda
        </AnchorButton>
        <AnchorButton margin="10px" to="/addSponsors">
          Asociados
        </AnchorButton>
        <Button>Publicar Evento</Button>
      </Form>
      <TemplateImageContainer>
        <img src="" />
      </TemplateImageContainer>
    </FormAddEventContainer>
  );
};
