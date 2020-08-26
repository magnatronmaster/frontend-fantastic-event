import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerCards, AnchorButton } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

const SubtitleOrganizations = styled.h3`
  text-align: center;
`;

export const MyOrganizations = () => {
  const [organizations, setOrganizations] = useState([
    {
      id: '1',
      name: 'magnatron',
    },
    {
      id: '2',
      name: 'Platzi Master',
    },
  ]);
  if (organizations.length >= 1) {
    return (
      <>
        <SubtitleOrganizations>Mis organizaciones</SubtitleOrganizations>
        <ContainerCards columns={2}>
          {organizations.map((item) => {
            return (
              <CardButton
                name={item.name}
                key={item.id}
                href="Acá va el link del button"
              />
            );
          })}
        </ContainerCards>
        <AnchorButton>Crear organización</AnchorButton>
      </>
    );
  } else {
    return <h3>You haven't organizations</h3>;
  }
};
