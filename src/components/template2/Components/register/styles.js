import styled from "styled-components"

export const Regist = styled.section`
    margin-top: 100px;
    margin-bottom: 100px;
    

    @media only screen and (max-width: 425px) {
        height:500 px;
    }
    

`
export const ContainerRegister = styled.div`
    max-width: 800px;
    width: 100%;
    height: 500px;
    background-color: rgba(95,15,148, 0.7);
    margin: auto;
    
    `
export const RegisterTop = styled.div`
    max-width: 800px;
    // width: 100%;
    height: 350px;
    background-color:rgba(41, 16, 207, 0.534);
    
    
    & p {
        font-size: 24px;
        color: #AFA76D;
        text-align: center;
        padding-top: 70px;
        padding-bottom: 40px; 
          
    }
    @media only screen and (max-width: 425px) {
        & p {
            font-size: 1em;
        }
        
    }
`
export const UserRegister = styled.div`
    width: 200px;
    height: 80px;
    border-radius: 7px;
    margin-top: 60px;
    font-size: 28px;
    font-weight: bold;
    color: #AFA76D;
    background-color: #13018D;
    margin: auto;
    padding-top: 30px;
    text-align: center;
`

export const RegisterBottom = styled.div`
    text-align: center;
    font-size: 24px;
    color: #AFA76D;
    padding-top: 20px;

    @media only screen and (max-width: 425px) {
        & p {
            font-size: 0.5em;
        }

      
    }

`
export const Suscrib = styled.div`
    margin-top: 30px;
    /* border: solid white;  */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const BoxLarge = styled.div`
    width: 400px;
    height: 40px;
    background-color: #13018D; 
    color: #AFA76D;
    font-size: 16px;
    border-radius: 7px;
    @media only screen and (max-width: 425px) {
        width:200px;
    }   
`
export const News = styled.div`
    width: 100px;
    background-color: #13018D; 
    color: #AFA76D;
    font-size: 14px;
    border-radius: 7px;
    @media only screen and (max-width: 425px) {
        font-size: 12px;
        padding-top: 10px;
    }   
`