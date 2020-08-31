import React, { useState } from 'react';
import styled from 'styled-components';

import { ContainerCards, Button } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

import { CreateEvent } from 'components/Modals/CreateEvent';

const SubtitleMyEvents = styled.h3`
  text-align: center;
  font-weight: bold;
  background: black;
  color: white;
  border-radius: 10px;
  width: 50%;
  margin: 20px auto;
`;

export const MyEvents = ({ data, id_org }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  if (data.length >= 1) {
    return (
      <>
        <SubtitleMyEvents>
          Eventos de {data[0].Organization.name_org}
        </SubtitleMyEvents>
        <ContainerCards>
          {data.map((item) => {
            return (
              <CardButton
                name={item.name_event}
                key={item.id_event}
                text="Ver evento"
                href={`/editEvent/${item.id_event}`}
              />
            );
          })}
        </ContainerCards>
        <Button onClick={handleOpenModal}>Crear Evento</Button>
        <CreateEvent
          id_org={id_org}
          isOpen={isOpenModal}
          isClose={handleCloseModal}
        />
      </>
    );
  } else {
    return (
      <>
        <SubtitleMyEvents>No tienes eventos creados</SubtitleMyEvents>
        <Button onClick={handleOpenModal}>Crear Evento</Button>
        <CreateEvent
          id_org={id_org}
          isOpen={isOpenModal}
          isClose={handleCloseModal}
        />
      </>
    );
  }
};
