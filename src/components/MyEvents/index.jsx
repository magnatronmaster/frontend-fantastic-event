import React, { useState } from 'react';
import styled from 'styled-components';

import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

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
  if (myEvents.length >= 1) {
    return (
      <>
        <SubtitleMyEvents>
          Eventos en los que he sido invitados como organizador
        </SubtitleMyEvents>
        <ContainerCards>
          {myEvents.map((item) => {
            return <CardButton name={item.name} key={item.id} />;
          })}
        </ContainerCards>
      </>
    );
  } else {
    return <h3>You haven't events</h3>;
  }
};
