import React from "react";

import { Separator, Name, ContainerSeparator } from "./styles";

export const SectionLarge = ({ sectionName }) => {
  return (
    <ContainerSeparator>
      <Separator>
          h
      </Separator>
      <Name>
        <p>{sectionName}</p>
      </Name>
    </ContainerSeparator>
  );
};
