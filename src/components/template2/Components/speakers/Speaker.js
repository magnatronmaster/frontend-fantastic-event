import React from 'react';
// import { FaTwitter } from "react-icons/fa";

import {
  Speakers,
  ContenedorSpeakers,
  TargetSpk,
  FotoConf,
  InfoConf,
  TextoSpeaker,
  Redes,
} from './styles';

import logoTwiter from '../../assets/twitter.svg'

const IMAGE_SPEAKER =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const SPEAKER_NAME = "Nombre Conferencista"

const SPEAKER_ROL = "Engineer"

const SPEAKER_INFO = " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

export const Speaker2 = ({ speaker }) => {
  return (
    <Speakers>
      <h2>Speakers</h2>
      <ContenedorSpeakers>
        {[1, 2, 3, 4].map((speakerData) => {
          return (
            <TargetSpk key = {speakerData}>
              <FotoConf>
                <img src={speakerData.photo || IMAGE_SPEAKER} alt="" />
              </FotoConf>
              <InfoConf>
                <h3>{speakerData.name || SPEAKER_NAME}</h3>
                <h4>{speakerData.rol || SPEAKER_ROL}</h4>
                <TextoSpeaker>
                  {speakerData.info || SPEAKER_INFO}
                </TextoSpeaker>
                <Redes>
                  <img src = {logoTwiter}></img>
                  
                  <p>{speakerData.twiter || "@usuario"}</p>
                </Redes>
              </InfoConf>
            </TargetSpk>
          );
        })}
      </ContenedorSpeakers>
    </Speakers>
  );
};
