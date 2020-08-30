/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Layout } from 'components/Layout';



import { HeaderHome } from 'components/HeaderHome/HeaderHome' 

// import HeaderHomeContainer from 'assets/images/homeEvent.jpg'

export const Home = () => {
  return (  
      <Layout>
        <HeaderHome/>
      </Layout>
       );
};
