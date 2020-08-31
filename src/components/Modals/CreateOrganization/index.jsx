import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import fetchData from '../../../lib/fetchData';
import {} from 'react-router';

import { FaTimes } from 'react-icons/fa';

import {
  InputForm,
  InputTextArea,
  LabelForm,
  Button,
  ModalContainer,
  ModalContain,
  TitleModal,
  CloseModal,
} from 'assets/GlobalStyles';

export const CreateOrganization = (props) => {
  const [form, setValues] = useState({
    idUser: localStorage.id_user,
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `${process.env.URL_API}organization/`;

    try {
      const data = await fetchData(url, requestOptions);
      swal({
        title: 'Se ha creado la organización correctamente',
        icon: 'success',
        button: false,
      });
      setTimeout(() => {
        location.href = `/${data.data.idOrg}/events`;
      }, 2000);
    } catch (error) {
      swal({
        title: 'Ha ocurrido un error creando la organización',
        text: `${error}, intentalo nuevamente`,
        icon: 'warning',
        button: '¡OK!',
      });
    }
  };

  if (!props.openModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContain>
        <CloseModal>
          <FaTimes onClick={props.closeModal} />
        </CloseModal>
        <form onSubmit={handleSubmit}>
          <TitleModal>¡Danos detalles de la organización!</TitleModal>
          <LabelForm htmlFor="organization-name">
            ¿Como se llama la organizacion?
          </LabelForm>
          <InputForm
            onChange={handleInput}
            id="organization-name"
            name="name_org"
            placeholder="Escribe el nombre de la organización"
            type="text"
          />
          <LabelForm htmlFor="organization-name">
            ¿De que trata la organización?
          </LabelForm>
          <InputTextArea
            onChange={handleInput}
            id="organization-name"
            name="description_org"
            placeholder="Describe brevemente la organización"
            margin="10px 0 0"
          />
          <Button type="submit">Crear organización</Button>
        </form>
      </ModalContain>
    </ModalContainer>,
    document.getElementById('modals')
  );
};
