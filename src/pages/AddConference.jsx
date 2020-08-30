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

export const AddConference = () => {
  return (
    <Contain>
      <TitleModal>Agrega una conferencia</TitleModal>
      <Form>
        <LabelForm for="name">Nombre</LabelForm>
        <InputForm id="name" type="text" />
        <LabelForm for="biography">Biografia</LabelForm>
        <InputTextArea id="biography" />
        <LabelForm for="specialty">Rol</LabelForm>
        <InputForm id="specialty" type="text" />
        <LabelForm for="twitter">Twitter</LabelForm>
        <InputForm id="twitter" type="text" />
        <LabelForm for="avatar">Foto</LabelForm>
        <InputForm id="avatar" type="file" border="none" />
        <Button>Agregar Conferencista</Button>
      </Form>
    </Contain>
  );
};
