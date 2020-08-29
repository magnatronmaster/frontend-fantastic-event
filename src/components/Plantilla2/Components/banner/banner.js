import React from "react"
import {Baner, MainEvent} from "./styles"

const NAME_EVENT = "Nombre del evento"
const DATE_EVENT = "15 de ocubre de 2020"


export const Banner = ({nameEvent, dateEvent}) => {
    return (
        <Baner>
            <MainEvent>
             <p>Prepárate para<br/> tu próximo evento</p>
                <h1>{nameEvent || NAME_EVENT}</h1>
                <p>{dateEvent || DATE_EVENT}</p>
            </MainEvent>
        </Baner>
    )


}

