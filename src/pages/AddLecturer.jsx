import React from 'react';

import {
  InputForm,
  LabelForm,
  Button,
  TitleModal,
  Contain,
  InputTextArea,
  Form,
} from 'assets/GlobalStyles';

export const AddLecturer = () => {
  return (
    <Contain>
      <TitleModal>Agrega un conferencista</TitleModal>
      <Form>
        <LabelForm for="title">Titulo de conferencia</LabelForm>
        <InputForm id="title" type="text" />
        <LabelForm for="lecturer">Conferencista</LabelForm>
        <InputForm id="lecturer" type="text" />
        <LabelForm for="description">Titulo de conferencia</LabelForm>
        <InputTextArea id="description" type="text" />
        <LabelForm for="date">Fecha</LabelForm>
        <InputForm id="date" type="date" />
        <LabelForm for="date">Hora</LabelForm>
        <InputForm id="date" type="time" />
        <Button>Agregar Conferencia</Button>
      </Form>
    </Contain>
  );
};
