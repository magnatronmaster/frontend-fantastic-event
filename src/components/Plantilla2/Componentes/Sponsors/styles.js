import styled from "styled-components"

export const Sponsors = styled.section`
& h2 {
    font-size: 64px;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
    color: #AFA76D;
}
@media only screen and (max-width: 425px) {
    & h2 {
        font-size: 40px
    }
  }

`
export const ContainerSponsors = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
  
    
    `
export const TargetSponsor = styled.div`
    width: 220px;
    height: 220px;
    background-color: rgba(255, 255, 255, 0.20);
    margin-bottom: 25px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    & img {
        width:80%;
    }
    & p {
        margin-top: 10px;
        color: #AFA76D;
    }
    @media only screen and (max-width: 425px) {
        margin: 10px auto;

    }
    `

