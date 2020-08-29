import styled from "styled-components"

export const Contact = styled.section`
    /* margin-top: 60px; */
    /* margin-bottom: 40px; */
    /* border: solid orange; */
    max-width: 1200px;
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 20px 0 0;

    
`
export const ContainerContact = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
`
export const MainContact = styled.div`
    
    color: #AFA76D;
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
    @media only screen and (max-width: 425px) {
        & p {
            font-size: 0.7em;
        } 
        & h2 {
            Font-size: 40px;
            margin-bottom: 20px;
        }
            
    }
`
export const WidgetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #AFA76D;
    /* border: solid lightcoral; */
    height: 200px;
    @media only screen and (max-width: 425px) {
        flex-wrap: wrap;
    }
    @media only screen and (min-width: 768px){
        /* border: solid lawngreen; */
            flex-wrap: nowrap;
        }
`
export const WidgetContact = styled.div`
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 425px) {
        margin-bottom: 20px;
        /* border: solid blue; */
        margin: auto;
        align-items: center;
        height: 150px;
        width: 200px;
    }
`
export const WidgetDate = styled.div`
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 425px) {
        margin-bottom: 20px;
        /* border: solid blue; */
        margin: auto;
        align-items: center;
        height: 150px;
        width: 200px;
    }
`
export const WidgetPlace = styled.div`
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 425px) {
        margin-bottom: 20px;
        /* border: solid blue; */
        margin: auto;
        align-items: center;
        height: 150px;
        width: 200px;
        }
`

