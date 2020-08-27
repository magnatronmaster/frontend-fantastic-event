import React, { useState } from 'react';
import styled from 'styled-components';

import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

const SubtitleEvents = styled.h3`
  text-align: center;
`;

export const EventsAsOrganizer = () => {
  const [events, setEvents] = useState([
    {
      id: '1',
      name: 'magnatron Event',
    },
    {
      id: '2',
      name: 'Platzi Master Event',
    },
    {
      id: '3',
      name: 'Cohort 3 Event',
    },
  ]);
  if (events.length >= 1) {
    return (
      <>
        <SubtitleEvents>
          Eventos en los que he sido invitados como organizador
        </SubtitleEvents>
        <ContainerCards>
          {events.map((item) => {
            return (
              <CardButton name={item.name} key={item.id} text="Ver evento" />
            );
          })}
        </ContainerCards>
      </>
    );
  } else {
    return <h3>You haven't events</h3>;
  }
};
