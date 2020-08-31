import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import fetchData from 'lib/fetchData';

import { FaTimes } from 'react-icons/fa';

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

import { Contain, FormCreateEvent, ContainerTemplateImg } from './styles';

import imageTemplate from 'assets/images/plantilla.png';

export const CreateEvent = ({ isOpen, isClose, id_org }) => {
  const [form, setValues] = useState({
    idOrg: id_org,
  });

  const handleChange = (e) => {
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
    const url = `${process.env.URL_API}event/`;

    try {
      const data = await fetchData(url, requestOptions);
      swal({
        title: 'Se ha creado el evento correctamente',
        icon: 'success',
        button: false,
      });
    } catch (error) {
      swal({
        title: 'Ha ocurrido un error creando el evento',
        text: `${error}, intentalo nuevamente`,
        icon: 'warning',
        button: '¡OK!',
      });
    }
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContain width="80%">
        <CloseModal>
          <FaTimes onClick={isClose} />
        </CloseModal>
        <Contain>
          <FormCreateEvent onSubmit={handleSubmit}>
            <TitleModal>¡Danos detalles del evento!</TitleModal>
            <LabelForm htmlFor="name_event">
              ¿Como se llama el evento?
            </LabelForm>
            <InputForm
              id="name_event"
              placeholder="Escribe el nombre del evento"
              type="text"
              name="name_event"
              onChange={handleChange}
            />
            <LabelForm htmlFor="date_start_event">
              Fecha de inicio del evento
            </LabelForm>
            <InputForm
              id="date_start_event"
              name="date_start_event"
              type="date"
              placeholder="Digita o selecciona la fecha del evento"
              onChange={handleChange}
            />
            <LabelForm htmlFor="date_end_event">Fecha fin del evento</LabelForm>
            <InputForm
              id="date_end_event"
              name="date_end_event"
              type="date"
              placeholder="Digita o selecciona la fecha del evento"
              onChange={handleChange}
            />
            <LabelForm htmlFor="event-address">
              ¿Donde va a ser el evento?
            </LabelForm>
            <InputForm
              id="event-address"
              placeholder="ingresa la dirección del evento"
              type="text"
            />
            <LabelForm htmlFor="logo-event">
              ¿Cual es el logo del evento?
            </LabelForm>
            <InputForm
              id="logo-event"
              type="file"
              border="none"
              onChange={handleChange}
            />
            <LabelForm htmlFor="banner-event">
              ¿Cual es el banner del evento?
            </LabelForm>
            <InputForm
              id="banner-event"
              type="file"
              border="none"
              onChange={handleChange}
            />
            <LabelForm htmlFor="description_event">
              Descripción del evento
            </LabelForm>
            <InputTextArea
              id="description_event"
              name="description_event"
              placeholder="Danos una descripción del evento"
              margin="10px 0 0"
              onChange={handleChange}
            />
            <Button>Crear evento</Button>
          </FormCreateEvent>
          <ContainerTemplateImg>
            <img src={imageTemplate} />
          </ContainerTemplateImg>
        </Contain>
      </ModalContain>
    </ModalContainer>,
    document.getElementById('modals')
  );
};
