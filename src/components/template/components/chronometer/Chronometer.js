import React, { useState } from 'react';

import { Countdown } from '../Countdown/Countdown'

import {CountdownWrapper} from './styles'



export const Chronometer = ({fecha}) => {  
    
   
    
    let moonLanding = new Date().getTime()    
    let deadline = new Date(fecha).getTime()
    

   const [count, setCount] = useState(moonLanding);
   
   let timeLeft = moonLanding - deadline  
   
   let days = Math.abs(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
   let hours = Math.abs(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   let minutes = Math.abs(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
   let seconds = Math.abs(Math.floor((timeLeft % (1000 * 60)) / 1000));

   const timerUpdate = setInterval( () => {  
       moonLanding = new Date(); 
      setCount(timeLeft)
   }, 1000)
     
  
    return (   
        <CountdownWrapper>
            <Countdown typeOfDate="Days" number={days}/>
            <Countdown typeOfDate="Hours" number={hours}/>
            <Countdown typeOfDate="Minutes" number={minutes}/>
            <Countdown typeOfDate="Seconds" number= {seconds}/>
        </CountdownWrapper>
     )
}