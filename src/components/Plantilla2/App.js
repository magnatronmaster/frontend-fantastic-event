import React from 'react';

import './App.css';

import {Header} from "./Components/header/header"
import Imglog from "./assets/logo-header.png"
import {Banner} from "./Components/banner/banner"
import {Register} from './Components/register/register';
import {Contact1} from './Components/contacto/contact';
import {Collaborators} from "./Components/Sponsors/sponsors";
import Logspo from './assets/logo-sp.svg'
import {GlobalStyle} from "./globalComponents"
import { InfoEvent } from './Components/info/Info';
import { Agenda } from './Components/agenda/agenda';
// import { Speaker2 } from './Components/speakers/Speaker';
// import FaTwitter from '/assets/twitter.svg'



function App() {
  return (
    <div className="App">

        <GlobalStyle/>
        
        <Header logoEvento = {Imglog}/>
        <Banner/>
        <InfoEvent/>
        <Agenda/>
       {/* <Speaker2 logoTwitter = {FaTwitter}/> */}
        <Register/>
        <Collaborators logoSponsor = {Logspo}/>
        <Contact1/>
        
     
    </div>
    
  );
}

export default App;
