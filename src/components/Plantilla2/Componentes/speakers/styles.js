import styled from "styled-components";

export const Speakers = styled.section`
  margin-top: 60px;
  
  & h2 {
    font-size: 64px;
    text-align: center;
    color: #AFA76D;
  }
`;

export const ContenedorSpeakers = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (max-width: 425px) {
    margin: auto;
    border: solid red;
  }
`;

export const TargetSpk = styled.div`
width: 570px;
    height: 350px;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    margin-top: 60px;
    display: flex;

    @media only screen and (max-width: 1024px){
        align-items: center;
    }

    @media only screen and (max-width: 425px) {
        width: 100%;
        height: auto;      
        border: solid yellow;
        display: inline-block;
    }
`

export const FotoConf = styled.div`
width:50%;
max-width: 570px;

& img {
    width: 80%;
    height: 80%;
}

@media only screen and (max-width: 425px) {
    width:100%;        
        border: solid red;
        & img {
            width: 100%;
        height: 100%; 
        border: solid white;   
        }
}
`

export const InfoConf = styled.div`

width: 50%;
    color: #AFA76D;
    padding: 20px;
    font-size: 18px;
    & h3 {
        text-align: center;
        margin-bottom: 15px;
    }

    & img {
        width: 30px;
    color: #AFA76D;
    }

    & h4 {
        text-align: center;
    margin-bottom: 15px;
    }

    & span {
        text-align: center;
    }

    @media only screen and (max-width: 425px) {
        border: solid green;        
        width: 100%;
    }

`

export const TextoSpeaker = styled.p`
    
margin-bottom: 20px;
`

export const Redes = styled.div`
display: flex;
    justify-content: center;
`
