import React from 'react';

// import './App.css';

import { Header } from './Components/header/header';
import Imglog from './assets/logo-header.png';
import { Banner } from './Components/banner/banner';
import { Register } from './Components/register/register';
import { Contact1 } from './Components/contacto/contact';
import { Collaborators } from './Components/Sponsors/sponsors';

import { GlobalStyle } from './globalComponents';
import { InfoEvent } from './Components/info/Info';
import { Agenda } from './Components/agenda/agenda';
import {Chronometer} from './Components/chronometer/Chronometer'
import { Speaker2 } from './Components/speakers/Speaker';


const USER_DATE = "Fri sep 28 2020 22:07:47 GMT-0500"

export function Plantilla({nameEvent, direction, dateEvent, imageEvent, logoEvent, eventDescription, conference, speaker, sponsor}) {
  return (
    <div>
      <GlobalStyle />

      <Header logoEvento={logoEvent || Imglog } />
      <Banner nameEvent ={nameEvent} dateEvent ={dateEvent} />
      <Chronometer fecha= {dateEvent || USER_DATE} />
      <InfoEvent nameEvent ={nameEvent} eventDescription ={eventDescription} imageEvent ={imageEvent} />
      <Agenda dateEvent={dateEvent} conference={conference}/>
      <Speaker2 speaker ={speaker} />
      <Register />
      <Collaborators sponsor={sponsor} />
      <Contact1 dateEvent ={dateEvent} direction ={direction} />
    </div>
  );
}
