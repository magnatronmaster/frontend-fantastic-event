import React from 'react';

import { MyEvents } from 'components/MyEvents';
import PageLoading from '../components/Loader/PageLoading';
//Custom hook
import useFetch from '../hooks/useFetch';

export const AdminDashboard = ({ match }) => {
  const {
    params: { id_org },
  } = match;

  //Custom hook that send request
  const url = `${process.env.URL_API}event/?id_org=${id_org}`;
  console.log(url);
  const { status, data } = useFetch(url);

  if (status != 'fetched') return <PageLoading />;

  return (
    <div>
      <MyEvents data={data} id_org={id_org} />
    </div>
  );
};
