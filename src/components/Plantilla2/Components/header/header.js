import React from "react"
import {Logo, Nav, ContainerHeder} from "./styles"



export const Header = ({logoEvento}) => {
    return (
        <ContainerHeder> 

            <Logo>
                <a href="#"><img src={logoEvento} alt="logo"/></a>
            </Logo>

            <Nav>
                <a href="#">Inicio</a>
                <a href="#">Info</a>
                <a href="#">Agenda</a>
                <a href="#">Speakes</a>
                
            </Nav>
        </ContainerHeder>
    )


}