import React from "react"
import {Regist, ContainerRegister, RegisterTop, RegisterBottom,Suscrib, UserRegister, BoxLarge, News} from "./styles"



export const Register = () => {
    return (
        <Regist>
            <ContainerRegister>
                <RegisterTop>
                    <p>Ven a disfrutar del mejor evento del año<br/>
                    Reserva tus tickets hoy mismo</p>
                    <UserRegister>Registrate</UserRegister>
                </RegisterTop>
                <RegisterBottom>
                    <p>Suscríbete al newsletter y entérate de nuestras novedades</p>
                    <Suscrib>
                        <BoxLarge/>
                        <News>Suscríbete ahora</News>
                    </Suscrib>
                </RegisterBottom>
            </ContainerRegister>
        </Regist> 
    );


};