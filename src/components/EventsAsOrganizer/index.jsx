import React from 'react';
import styled from 'styled-components';

import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

const SubtitleEvents = styled.h3`
  text-align: center;
`;

export const EventsAsOrganizer = ({ data }) => {
  data.map((item) => console.log(item));

  if (data.length >= 1) {
    return (
      <>
        <SubtitleEvents>
          Eventos en los que he sido invitados como organizador
        </SubtitleEvents>
        <ContainerCards>
          {data.map((item) => {
            return (
              <CardButton
                name={item.name_event}
                key={item.id_event}
                text="Ver evento"
              />
            );
          })}
        </ContainerCards>
      </>
    );
  } else {
    return <h3>You haven't events</h3>;
  }
};
