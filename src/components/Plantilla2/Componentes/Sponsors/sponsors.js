import React from "react"
import {Sponsors, ContainerSponsors, TargetSponsor} from "./styles"



export const Collaborators = ({logoSponsor}) => {
    return (
        <Sponsors>
            <h2>Sponsors</h2>
                <ContainerSponsors>
                    {[1,2,3,4,5,6,7,8,9,10].map((sponsor) => {
                        return (
                            <TargetSponsor>
                                <img src={logoSponsor} alt="" />
                                <p>Nombre</p>
                            </TargetSponsor>
                        )
                    })}

                </ContainerSponsors>

        </Sponsors>
    );


};