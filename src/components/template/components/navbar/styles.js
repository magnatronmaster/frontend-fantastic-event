import styled from "styled-components";


export const NavbarContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type:none;     
    max-width: 1200px;
    align-items: center;
    justify-content: space-around; 
    margin:0;  
    & li{
        padding: 0 20px;
    }
`

export const AnchorItem = styled.a`
font-family: Noto Sans JP;
font-style: normal;
font-weight: normal;
font-size: 1.5vw;
line-height: 29px;
text-align: center;
color: #0ABCD5; 
padding: 20px 0;

@media (max-width: 680px) {
    font-size: 15px;
  }

`

export const ContainerOfContainer =styled.div `
position:fixed;
bottom:-20px;
background: rgba(0, 0, 0, 0.8);
width:100vw;
display:flex;
justify-content:center;
align-items:center;
transform:scale(.8)
`
