import React, { useState } from 'react';
import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

export const AddConferences = () => {
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
      </>
    );
  } else {
    return <h3>You haven't events</h3>;
  }
};
