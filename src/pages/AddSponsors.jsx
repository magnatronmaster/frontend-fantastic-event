import React, { useState } from 'react';
import { ContainerCards } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

export const AddSponsors = () => {
  const [sponsors, setSponsors] = useState([
    {
      id: '1',
      name: 'Platzi',
    },
    {
      id: '2',
      name: 'Platzi Master',
    },
    {
      id: '3',
      name: 'Nicolas Molina',
    },
  ]);
  if (sponsors.length >= 1) {
    return (
      <>
        <ContainerCards>
          {sponsors.map((item) => {
            return (
              <CardButton
                name={item.name}
                key={item.id}
                text="Editar Sponsor"
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
