import React from 'react';

import {
  InputForm,
  LabelForm,
  Button,
  TitleModal,
  Contain,
  Form,
} from 'assets/GlobalStyles';

export const AddSponsor = (props) => {
  console.log(props.match.params);
  return (
    <Contain>
      <TitleModal>Agrega un sponsor</TitleModal>
      <Form>
        <LabelForm for="name">Nombre</LabelForm>
        <InputForm id="name" type="text" />
        <LabelForm for="url">Dirección url</LabelForm>
        <InputForm id="url" type="text" />
        <LabelForm for="logo">Agregar logo</LabelForm>
        <InputForm id="logo" type="file" border="none" />
        <Button>Agregar Sponsor</Button>
      </Form>
    </Contain>
  );
};
