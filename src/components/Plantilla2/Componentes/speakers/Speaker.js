import React from "react";
import { FaTwitter } from "react-icons/fa";

import {Speakers, ContenedorSpeakers, TargetSpk, FotoConf, InfoConf, TextoSpeaker, Redes} from './styles'

const IMAGE_SPEAKER = 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

export const Speaker2 = ({logoTwitter}) => {
  return (
    <Speakers>
      <h2>Speakers</h2>
        <ContenedorSpeakers>
      {[1,2,3,4].map((speaker) => {
          return(
              
        <TargetSpk>
          <FotoConf>
            <img src={IMAGE_SPEAKER} alt="" />
          </FotoConf>
          <InfoConf>
            <h3>Nombre Conferencista</h3>
            <h4>Rol</h4>
            <TextoSpeaker>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </TextoSpeaker>
            <Redes>
              <FaTwitter/>
              <p>@usuario</p>
            </Redes>
          </InfoConf>
        </TargetSpk>      
          )
      })}
     </ContenedorSpeakers>
    </Speakers>
  );
};
