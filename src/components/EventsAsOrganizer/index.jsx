import React from 'react';
import styled from 'styled-components';

import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

const SubtitleEvents = styled.h3`
  text-align: center;
  font-weight: bold;
`;

export const EventsAsOrganizer = ({ data }) => {
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
                href={`/editEvent/${item.id_event}`}
              />
            );
          })}
        </ContainerCards>
      </>
    );
  } else {
    return (
      <SubtitleEvents>
        No has sido invitado a eventos como organizador
      </SubtitleEvents>
    );
  }
};
