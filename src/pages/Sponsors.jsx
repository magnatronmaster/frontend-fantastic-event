import React, { useState } from 'react';
import { ContainerCards, AnchorButton } from 'assets/GlobalStyles';
import { CardButton } from 'containers/CardButton';

import PageLoading from '../components/Loader/PageLoading';

import useFetch from '../hooks/useFetch';

export const Sponsors = ({ match }) => {
  const {
    params: { id_event },
  } = match;

  const url = `${process.env.URL_API}sponsors/?id_event=${id_event}`;
  const { status, data } = useFetch(url);

  if (status != 'fetched') return <PageLoading />;

  if (data.length >= 1) {
    return (
      <>
        <ContainerCards>
          {data.map((item) => {
            return (
              <CardButton
                name={item.name_sponsor}
                key={item.id_sponsor}
                text="Editar Sponsor"
              />
            );
          })}
        </ContainerCards>
        <AnchorButton to={`/addSponsor/`}>Añadir sponsor</AnchorButton>
      </>
    );
  } else {
    return (
      <>
        <h3>You haven't events</h3>
        <AnchorButton to={`/addSponsor/`}>Añadir sponsor</AnchorButton>
      </>
    );
  }
};
