import React, { useState } from 'react';
import styled from 'styled-components';

import { ContainerCards, Button } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

import { CreateEvent } from 'components/Modals/CreateEvent';

const SubtitleMyEvents = styled.h3`
  text-align: center;
`;

export const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([
    {
      id: '1',
      name: 'magnatron MyEvent',
    },
    {
      id: '2',
      name: 'Platzi Master MyEvent',
    },
    {
      id: '3',
      name: 'Cohort 3 MyEvent',
    },
  ]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  if (myEvents.length >= 1) {
    return (
      <>
        <SubtitleMyEvents>Eventos de mi organización</SubtitleMyEvents>
        <ContainerCards>
          {myEvents.map((item) => {
            return (
              <CardButton name={item.name} key={item.id} text="Ver evento" />
            );
          })}
        </ContainerCards>
        <Button onClick={handleOpenModal}>Crear Evento</Button>
        <CreateEvent isOpen={isOpenModal} isClose={handleCloseModal} />
      </>
    );
  } else {
    return (
      <>
        <h3>You haven't events</h3>
        <Button onClick={handleOpenModal}>Crear Evento</Button>
      </>
    );
  }
};
