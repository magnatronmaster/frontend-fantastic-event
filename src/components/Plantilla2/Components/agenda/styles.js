import styled from "styled-components";

export const AgendaPlantilla = styled.section`
  margin-top: 100px;
  margin-bottom: 60px;
  & h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #afa76d;
  }
  & h2 {
    margin-bottom: 60px;
    color: #afa76d;
    font-size: 64px;
    text-align: center;
  }
  @media only screen and (max-width: 425px) {
    & h2 {
      font-size: 40px;
    }
    
  }
`;

export const ContenedorTablaPlantilla = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const FechaPlantilla = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  color: #afa76d;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media only screen and (max-width: 1440px) {
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    margin-bottom: 40px;
  }
`;

export const PrimerDia = styled.div`
  max-width: 600px;
  width: 100%;
  height: 60px;
  background-color: rgb(116, 19, 150);
  padding-left: 30px;
  padding-top: 15px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 425px) {
    text-align: center;
  }
`;

export const SegundoDia = styled.div`
  max-width: 600px;
  width: 100%;
  height: 60px;
  background-color: rgb(34, 6, 144);
  padding-left: 30px;
  padding-top: 15px;

  @media only screen and (max-width: 768px) { 
    text-align: center;
  }
`;

export const TablaEventoPlantilla = styled.table`
max-width: 1000px;
    width: 100%;
    margin: auto;
    color: #AFA76D;
    border-collapse: collapse;

    & td {
        width: 50px;
     }

     & td, th {
        padding: 20px;
        border-bottom: solid 2px  #868050;  
     }

`
