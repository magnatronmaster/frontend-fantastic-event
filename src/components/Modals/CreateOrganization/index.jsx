import React from 'react';
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
} from 'assets/GlobalStyles';

export const CreateOrganization = (props) => {
  if (!props.openModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContain>
        <CloseModal>
          <FaTimes onClick={props.closeModal} />
        </CloseModal>
        <form>
          <TitleModal>¡Danos detalles de la organización!</TitleModal>
          <LabelForm htmlFor="organization-name">
            ¿Como se llama la organizacion?
          </LabelForm>
          <InputForm
            id="organization-name"
            placeholder="Escribe el nombre de la organización"
            type="text"
          />
          <LabelForm htmlFor="organization-name">
            ¿De que trata la organización?
          </LabelForm>
          <InputForm
            id="organization-name"
            type="textarea"
            placeholder="Describe brevemente la organización"
            margin="10px 0 0"
          />
          <Button>Crear organización</Button>
        </form>
      </ModalContain>
    </ModalContainer>,
    document.getElementById('modals')
  );
};
