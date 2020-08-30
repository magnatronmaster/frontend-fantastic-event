import styled from "styled-components"

export const Baner = styled.section`
    padding-top: 160px;
    // pading: 30px;
    width: 100%;
    height: 500px;
    background-color: rgba(209, 219, 189, 0.15);
    
    
    @media only screen and (max-width: 425px) {
        height: 300px;
        & h1 {
            margin-top: 30px;
            
            
        }
        
    }
    
    `
export const MainEvent = styled.div`
    font-family:'Source Sans Pro', sans-serif;
    color: #AFA76D;
    flex-flow: column wrap;
    justify-content: center;
    height: 100%;
    margin-top: 30px;
    
  

    & p {
        font-size: 48px;
        font-weight: bold; 
        
    }
    

    & h1 {font-size: 96px;
        margin-bottom: 50px; 
        color: #AFA76D;
    }
    @media only screen and (max-width: 425px) {
        & p {font-size: 24px;
        font-weight: bold;
        }
        & h1 {font-size: 36px;
            margin-bottom: 50px;
        }
    }
    
`
