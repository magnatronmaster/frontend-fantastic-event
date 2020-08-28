import React from 'react'
import {SponsorLogo, SponsorContainer, SponsorName} from './styles'

export const Sponsor = ({ sponsorImage, sponsorTitle, sponsorUrl }) => {
    return(

        <SponsorContainer>
            <div>
                <a href = {sponsorUrl}> <SponsorLogo src={ sponsorImage } alt=""/> </a>
            </div>
            <div>
                <SponsorName>
                    {sponsorTitle}
                </SponsorName>
            </div>
        </SponsorContainer>
        
    )
}