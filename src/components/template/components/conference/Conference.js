import React from 'react'
import { ContainerConference, ConferenceDetails, Hour, Speaker, ConferenceContent } from './styles'

export const Conference = ({time, conferenceTitle, speaker, conferenceDescription}) => {
    return (
        <ContainerConference>
            <ConferenceDetails>
                <Hour> <p>{time}</p></Hour>
                <h3>{conferenceTitle}</h3>
                <Speaker>{speaker}</Speaker>
            </ConferenceDetails>               
            <ConferenceContent>
            <p>{conferenceDescription}</p>
            </ConferenceContent>    
        </ContainerConference>
        )
}