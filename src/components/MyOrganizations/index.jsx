import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContainerCards, Button } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

import { CreateOrganization } from 'components/Modals/CreateOrganization';

const SubtitleOrganizations = styled.h3`
  text-align: center;
`;

export const MyOrganizations = () => {
  const [organizations, setOrganizations] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

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
                text="Ver organización"
                href="Acá va el link del button"
              />
            );
          })}
        </ContainerCards>
        <Button onClick={handleOpenModal}>Crear organización</Button>
        <CreateOrganization openModal={isOpen} closeModal={handleCloseModal} />
      </>
    );
  } else {
    return (
      <>
        <h3>You haven't organizations</h3>
        <Button onClick={handleOpenModal}>Crear organización</Button>
        <CreateOrganization openModal={isOpen} closeModal={handleCloseModal} />
      </>
    );
  }
};
