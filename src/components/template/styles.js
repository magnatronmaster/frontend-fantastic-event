import styled from "styled-components";

export const Intro = styled.h2`
font-family: Noto Sans JP;
font-style: normal;
font-weight: 500;
font-size: 4.5vw;
line-height: 101px;
text-align: center;

color: #FFFFFF;

`

export const TemplateContainer = styled.div`
display:flex;
max-width:1200px;
flex-direction: column;
justify-content:center;
align-items:center;
margin:auto;
`

export const SuperTitle = styled.h1 `
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 4.6vw;
line-height: 80px;
text-align: center;
// color: #000000;
-webkit-text-stroke: .2vw #38E6FE;

`

export const ContainerFlexHorizontal = styled.section `

display:flex;
flex-direction:row;
max-width:1200px;
flex-wrap:wrap;
align-items:center;
justify-content:center;
padding-bottom:80px;

`

export const WrapperPrincipalImage = styled.div`

max-width:1200px;
& img{
    width:100%;
}
`

export const TextDescription = styled.div`
background-color:rgba(11, 17, 17, 0.66);
color: white;
padding:100px;

&p {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    
}

`
