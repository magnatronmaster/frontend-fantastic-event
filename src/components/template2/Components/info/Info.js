import React from 'react'
import {Titulo, Contenedor, FotoEvento, InfEvento} from './styles'

const IMAGEN_CONGRESO = "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
const NOMBRE_EVENTO = "Nombre del evento"
const INFO_EVENTO = "City I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide."

export const InfoEvent = ({nameEvent, eventDescription, imageEvent}) => {

    return(
        <section >
        <Titulo>Un evento que no te puedes perder</Titulo>
        <Contenedor>
            <FotoEvento>
                <img src={imageEvent || IMAGEN_CONGRESO}  alt=""/>
            </FotoEvento>
            <InfEvento>
                <h3>{nameEvent || NOMBRE_EVENTO}</h3>
                <p>{eventDescription || INFO_EVENTO} </p>
                
            </InfEvento>
        </Contenedor>
    </section>
    )
}