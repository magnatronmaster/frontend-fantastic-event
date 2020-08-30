import React from "react"
import {Contact, ContainerContact, MainContact, WidgetContainer, WidgetContact, WidgetDate, WidgetPlace} from "./styles"



export const Contact1 = ({dateEvent, direction}) => {
    return (
        <Contact>
            <ContainerContact>
                <MainContact>
                    <h2>Contacto</h2>
                    <p>Si tienes alguna pregunta, tenemos la respuesta</p>
                </MainContact>
                <WidgetContainer>
                
                    {/* <WidgetContact>
                        <h3>Contacto</h3>
                        <p>info@misitio.com</p>
                        <p>3103103103</p>
                    </WidgetContact> */}
                    <WidgetDate>
                        <h3>Cúando</h3>
                        <p>{dateEvent || "30 octubre 2020"}</p>
                        {/* <p>19:30 - 22:30</p> */}
                    </WidgetDate>
                    <WidgetPlace>
                        <h3>Dónde</h3>
                        <p>{direction || "Parque Metropolitano"}</p>
                        {/* <p>Bogotá - Colombia</p> */}
                    </WidgetPlace>
                </WidgetContainer>
            </ContainerContact>
        </Contact>
    );


};