import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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

export const CreateEvent = ({ isOpen, isClose }) => {
  if (!isOpen) return null;  

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContain width="80%">
        <CloseModal>
          <FaTimes onClick={isClose} />
        </CloseModal>
        <Contain>
          <FormCreateEvent>
            <TitleModal>¡Danos detalles del evento!</TitleModal>
            <LabelForm htmlFor="organization-name">
              ¿Como se llama el evento?
            </LabelForm>
            <InputForm
              id="organization-name"
              placeholder="Escribe el nombre del evento"
              type="text"
            />
            <LabelForm htmlFor="organization-name">
              ¿Que día va a ser el evento?
            </LabelForm>
            <InputForm
              id="organization-name"
              type="date"
              placeholder="Digita o selecciona la fecha del evento"
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
            <InputForm id="logo-event" type="file" border="none" />
            <LabelForm htmlFor="banner-event">
              ¿Cual es el banner del evento?
            </LabelForm>
            <InputForm id="banner-event" type="file" border="none" />
            <LabelForm htmlFor="event-description">
              Descripción del evento
            </LabelForm>
            <InputTextArea
              id="event-description"
              placeholder="Danos una descripción del evento"
              margin="10px 0 0"
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
