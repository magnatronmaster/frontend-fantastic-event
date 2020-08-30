import React from "react"
import {Sponsors, ContainerSponsors, TargetSponsor} from "./styles"
import Logspo from '../../assets/logo-sp.svg';


export const Collaborators = ({sponsor}) => {
    return (
        <Sponsors>
            <h2>Sponsors</h2>
                <ContainerSponsors>
                    {[1,2,3,4,5,6,7,8,9,10].map((sponsorItem) => {
                        return (
                            <TargetSponsor key = {sponsorItem}>
                                <img src={sponsorItem.logo || Logspo} alt="" />
                                <p>{sponsorItem.name || "Nombre"}</p>
                            </TargetSponsor>
                        )
                    })}

                </ContainerSponsors>

        </Sponsors>
    );


};