import React, { useState } from 'react';
import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

export const AddLecturers = () => {
  const [lecturers, setLecturers] = useState([
    {
      id: '1',
      name: 'Angel Castiblanco',
    },
    {
      id: '2',
      name: 'Jaime Piratova',
    },
    {
      id: '3',
      name: 'Luis Lazcano',
    },
  ]);
  if (lecturers.length >= 1) {
    return (
      <>
        <ContainerCards>
          {lecturers.map((item) => {
            return (
              <CardButton
                name={item.name}
                key={item.id}
                text="Editar conferencista"
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
