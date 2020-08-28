import React from 'react' 
import {ContainerSectionSmall} from './styles'

export const SectionSmall = ({sectionName}) => {
    return(
    <ContainerSectionSmall>
        <p>{sectionName}</p>
    </ContainerSectionSmall>
        )
}