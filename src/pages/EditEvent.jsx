import React from 'react';

import { FormEditEvent } from 'components/FormEditEvent';
import PageLoading from '../components/Loader/PageLoading';
//Custom hook
import useFetch from '../hooks/useFetch';

export const EditEvent = ({ match }) => {
  const {
    params: { id_event },
  } = match;

  //Custom hook that send request
  const url = `${process.env.URL_API}event/${id_event}`;

  const { status, data } = useFetch(url);

  if (status != 'fetched') return <PageLoading />;

  return <FormEditEvent data={data} />;
};
