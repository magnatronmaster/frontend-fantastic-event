import React, { useState, useEffect }  from 'react';

import { MyOrganizations } from 'components/MyOrganizations';
import { EventsAsOrganizer } from 'components/EventsAsOrganizer';
import PageLoading from '../components/Loader/PageLoading';

import useFetch from '../hooks/useFetch';

export const MainDashboard = () => {
  //Custom hook that send request
  const url = `${process.env.URL_API}users/${localStorage.getItem('id_user')}`;
  const { status, data } = useFetch(url); 
    
 

  if (status != 'fetched') return <PageLoading />;


  return (
    <section>
      <MyOrganizations data={data.Organizations} />
      <EventsAsOrganizer data={data.events_organizer} />  
         
    </section>
  );
};
