import React from "react";


// import "./App.css";
import { PrincipalButton } from "./components/button/TemplateButton";

import { Conference } from "./components/conference/Conference";
import { Speaker } from "./components/speaker/Speaker";
import { Sponsor } from "./components/sponsor/Sponsor";
import { Navbar } from "./components/navbar/Navbar";
import { SectionSmall } from "./components/sectionInfoSmall/SectionSmall";
import { SectionLarge } from "./components/sectionInfoLarge/SectionLarge";
import { DateTimer } from "./components/dateTimer/DateTimer";
import {
  Intro,
  TemplateContainer,
  SuperTitle,
  ContainerFlexHorizontal,
  WrapperPrincipalImage,
  TextDescription
} from "./styles";
import { Chronometer } from "./components/chronometer/Chronometer";
import { GlobalStyle } from "./GlobalStyles";


// imagen del evento
const EVENT_IMAGE = "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"


// Datos para el componente del speaker

const PHOTO =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const SPEAKER = "Kent C. Dodds";
const BIO =
  "Etiam elementum convallis augue. Proin aliquet massa nulla, vel facilisis lectus suscipit at. Fusce mollis, nibh in rutrum commodo, urna sem bibendum lacus, eu sollicitudin tellus sapien eget nisi. Curabitur eget ligula id nunc maximus eleifend.";

//Datos para el componente sponsor

const SPONSOR_IMAGE = "https://media.graphcms.com/H5Wj9d61Q76Klnnltrhj";
const SPONSOR_TITLE = "Codebar";
const SPONSOR_URL = "https://www.google.com/";

// Datos para el componente Conference time, conferenceTitle, speaker, conferenceDescription

const TIME = "8:45 am ";
const CONFERENCE_TITLE = "Server Side Rendering";
const SPEAKER_CONFERENCE = "Kent C. Dodds";
const CONNFERENCE_DESCRIPTION =
  "Nullam volutpat aliquam sapien, eget elementum justo dictum non. Nullam a erat massa. Ut dignissim velit sit amet elit dictum eleifend. Duis tempus justo porta tellus consectetur, eget finibus orci suscipit. Mauris feugiat mauris ut tellus posuere, ut convallis tortor euismod.Etiam elementum convallis augue. Proin aliquet massa nulla, vel facilisis lectus suscipit at. Fusce mollis, nibh in rutrum commodo, urna sem bibendum lacus, eu sollicitudin tellus sapien eget nisi. Curabitur eget ligula id nunc maximus eleifend. ";

// datos para el componente sectionSmall y SectionLarge
const SECTION_INFO = "20 DE OCTUBRE DE 2020";

//datos para el componente date

const DATE_EVENT = "sep 1, 2020 00:00:00";

const DIRECTION = "calle 12 No. 15-19"

export const Template = ({nameEvent, direction, dateEvent, imageEvent, logoEvent, eventDescription, conference, speaker}) => {
 
  
  return (
    <>
      <GlobalStyle />

      <TemplateContainer>
        <Navbar   />
        <SectionSmall
          sectionName={dateEvent || DATE_EVENT}
          style={{ paddingTop: "50px" }}
          id="inicio"
        />
         <SectionSmall
          sectionName={direction || DIRECTION}          
        />

        {/* Opcional: in-line style for attachment image.
        style={{background:"URL('https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        backgroundSize: "cover"}}  */}

        <header>
          <div>
           
            <Intro>
              {nameEvent || "Gran Evento No te lo puedes perder"}
              <br/>
              <img src = {logoEvent || "https://seeklogo.net/wp-content/uploads/2019/01/dji-logo.png"} width = "100px" alt = {nameEvent}/>
            
            </Intro>
          </div>

          <PrincipalButton />
          

          <Chronometer fecha = {dateEvent || DATE_EVENT} />
        </header>

        <SectionSmall sectionName="EL EVENTO" style={{ paddingTop: "50px" }} />

        <div >
          <SuperTitle>{nameEvent || "EL GRAN EVENTO JAMAS VISTO"}</SuperTitle>

          <WrapperPrincipalImage>
            <img
              src={imageEvent || EVENT_IMAGE}
              alt={nameEvent}
              
            />
          </WrapperPrincipalImage>
          <TextDescription>
            <p >
              {eventDescription || CONNFERENCE_DESCRIPTION}
            </p>
          </TextDescription>
        </div>

        <SectionLarge sectionName="CONFERENCIAS" />

        <DateTimer eventDate={conference || DATE_EVENT} />
        <ContainerFlexHorizontal>
          {[1, 2, 3, 4].map((conferenceInfo) => {
            return (
              <Conference
                time={conferenceInfo.time || TIME}
                conferenceTitle={conferenceInfo.title || CONFERENCE_TITLE}
                speaker={conferenceInfo.speaker || SPEAKER_CONFERENCE}
                conferenceDescription={conferenceInfo.description || CONNFERENCE_DESCRIPTION}
              />
            );
          })}
        </ContainerFlexHorizontal>

        <SectionLarge sectionName="CONFERENCISTAS" />

        <ContainerFlexHorizontal>
          {[1, 2, 3, 4].map((speakerInfo) => {
            return (
              <Speaker
                photo={speakerInfo.photo || PHOTO}
                speaker={speakerInfo.name || SPEAKER}
                bio={speakerInfo.bio || BIO}
                SpeakerTwiter={speakerInfo.twiter}
              />
            );
          })}

          <SectionLarge sectionName="SPONSORS" id = "/quees" />

          {[1, 2, 3, 4, 5, 6].map((sponsorInfo) => {
            return (
              <Sponsor
                sponsorImage={sponsorInfo.image || SPONSOR_IMAGE}
                sponsorTitle={sponsorInfo.title || SPONSOR_TITLE}
                sponsorUrl={sponsorInfo.url || SPONSOR_URL}
              />
            );
          })}
        </ContainerFlexHorizontal>
        {/* Aca voy a poner los componentes de la plantilla de jaime */}
        
        
      </TemplateContainer>
    </>
  );

}
