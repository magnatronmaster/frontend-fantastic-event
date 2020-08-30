import React, { useState } from 'react';
import { ContainerCards, AnchorButton } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

export const Conferences = () => {
  const [conferences, setConference] = useState([
    {
      id: '1',
      name: 'Entrega de proyecto',
    },
    {
      id: '2',
      name: 'React JS',
    },
    {
      id: '3',
      name: 'Angular',
    },
  ]);
  if (conferences.length >= 1) {
    return (
      <>
        <ContainerCards>
          {conferences.map((item) => {
            return (
              <CardButton
                name={item.name}
                key={item.id}
                text="Editar conferencia"
              />
            );
          })}
        </ContainerCards>
        <AnchorButton to="/addConference">Añadir conferencia</AnchorButton>
      </>
    );
  } else {
    return (
      <>
        <h3>You haven't events</h3>
        <AnchorButton to="/addConference">Añadir conferencia</AnchorButton>
      </>
    );
  }
};
