import { FaTwitter } from "react-icons/fa";
import React from "react";

import { SpeakerContainer, SpeakerPhoto, SpeakerName, SpeakerBio, LogoTwitter } from "./styles";

export const Speaker = ({ photo, speaker, bio, SpeakerTwiter  }) => {
  return (
    <SpeakerContainer>
      
        <SpeakerPhoto src={photo} alt={speaker}></SpeakerPhoto>
      
      <SpeakerName>{speaker}</SpeakerName>
      <SpeakerBio>{bio}</SpeakerBio>
      <div style = {{
          
            paddingBottom: 20 + 'px'
          
      }}>
       <LogoTwitter href = {SpeakerTwiter}> <FaTwitter /> </LogoTwitter>
      </div>
    </SpeakerContainer>
  );
};
