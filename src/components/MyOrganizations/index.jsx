import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ContainerCards, Button } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

import { CreateOrganization } from 'components/Modals/CreateOrganization';

const SubtitleOrganizations = styled.h3`
  text-align: center;
  font-weight: bold;
  background: black;
  color: white;
  border-radius: 10px;
  width: 50%;
  margin: 20px auto;
`;

export const MyOrganizations = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  if (data.length >= 1) {
    return (
      <>
        <SubtitleOrganizations>Mis organizaciones</SubtitleOrganizations>
        <ContainerCards columns={2}>
          {data.map((item) => {
            return (
              <CardButton
                name={item.name_org}
                key={item.id_org}
                text="Ver organización"
                href={`${item.id_org}/events`}
              />
            );
          })}
        </ContainerCards>
        <Button onClick={handleOpenModal}>¡Crea una organización!</Button>
        <CreateOrganization openModal={isOpen} closeModal={handleCloseModal} />
      </>
    );
  } else {
    return (
      <>
        <SubtitleOrganizations>No tienes organizaciones</SubtitleOrganizations>
        <Button onClick={handleOpenModal}>¡Crea una organización!</Button>
        <CreateOrganization openModal={isOpen} closeModal={handleCloseModal} />
      </>
    );
  }
};
