import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 64px;
  text-align: center;
  color: #afa76d;
  margin: 60px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 10px;
    font-size: 40px;

  }

  @media only screen and (max-width: 320px) {
    margin-top: 15px;
    font-size: 48px;
  }
`

export const Contenedor = styled.section`
  width: 100%;
  max-width: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 1440px){

  }
  
`

export const FotoEvento = styled.div`
  width: 100%;
  max-width: 600px;
  & img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 320px) {
    & img {
      width: 100%;
      height: 100%;
    }
  
  @media only screen and (max-width: 320px) {
      & img {
        width: 100%;
        height: 100%;
      }
  @media only screen and (min-width: 1024px){
      width: 50%;
  
  }
`

export const InfEvento = styled.div`
font-size: 24px;
    color: #AFA76D;   
    width: 600px;
    padding: 20px 40px;

    @media only screen and (max-width: 1440px){
         & h3 {
            text-align: center;
            margin-bottom: 20px;
         }
    }
    @media only screen and (max-width: 768px) {
        & h3 {
            text-align: center;
       margin-bottom: 20px;
        }
    }
    @media only screen and (max-width: 425px) {
        & h3 {
            font-size: 24px;
        text-align: center;
        margin-bottom: 15px;
        }
        & p {
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 320px) {
        color: #AFA76D;
    /* border: solid pink; */
    width: 600px;
    padding: 20px 40px;
    & h3 {
        font-size: 24px;
    text-align: center;
    margin-bottom: 15px;
    }
    & p {
        font-size: 16px;
    }
    }

`
