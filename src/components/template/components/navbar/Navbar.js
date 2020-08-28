import React from 'react'


import {PrincipalButton} from '../button/TemplateButton'
import {NavbarContainer, AnchorItem, ContainerOfContainer} from './styles'



export const Navbar = () => {
    return(
        
        <ContainerOfContainer>
            <NavbarContainer>               
                <li> <AnchorItem href = "/inicio">INICIO</AnchorItem> </li>
                <li><AnchorItem href = "./#quees">QUE ES </AnchorItem></li>
                <li><AnchorItem href = "/agenda">AGENDA</AnchorItem></li>
                <li><AnchorItem href = "/conferencistas">CONFERENCISTAS</AnchorItem></li>
                <li><AnchorItem><PrincipalButton/></AnchorItem></li>
            </NavbarContainer>
        </ContainerOfContainer>
    )
}
