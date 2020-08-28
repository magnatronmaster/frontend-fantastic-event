import styled from "styled-components";

export const ContainerConference = styled.div`
  max-width: 400px;
  height: auto;
  background: #5f5f5f;
  margin:20px;
  
`;

export const ConferenceDetails = styled.div`
    
    background-image:url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size:cover;
    display: grid;
	  grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas: "hour"  "conference" "speaker";
    padding:20px;
	   
   
    & h3 {
        grid-area: conference
        font-family: 'Roboto', sans-serif;
        font-size: 3.5vw;
        color:white;
        margin:0;        
        
    }

    & p {

        grid-area: speaker;
        font-size: 2vw;        
    }   

    
`;

export const Speaker = styled.p`
  color: white;
`;

export const Hour = styled.div`
  grid-area: hour;
  justify-self: end;
  align-self: start;
  background: #38e6fe;
  padding: 7px 15px;
  max-width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  & p {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    text-align: center;
  }
`;

export const ConferenceContent = styled.div`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
  padding: 20px;

  & p {
    margin: 0;
  }

  @media (max-width: 680px) {
    font-size: 12px;
  }
`;
