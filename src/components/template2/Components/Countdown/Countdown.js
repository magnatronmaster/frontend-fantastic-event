import React from 'react'
import {Number, Day, ContainerCountdown, ContainerNumber, ContainerDay } from './styles'

export const Countdown = ({typeOfDate, number}) => {

    return (
        <ContainerCountdown>
            <ContainerDay>
                <Day >{typeOfDate}</Day>
            </ContainerDay>
            <ContainerNumber>
                <Number>{number}</Number>
            </ContainerNumber>
        </ContainerCountdown>
    )
        
    
}