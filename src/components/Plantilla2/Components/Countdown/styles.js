import styled, { css } from 'styled-components'

export const Number = styled.p`
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 36px;
    text-align: center;
    color: transparent;
	background: linear-gradient(180deg, #0ABCD5 29.17%, #0B1111 100%), #FFFFFF;
    -webkit-background-clip: text;
    margin: 0;
`

export const Day = styled.p`
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #38E6FE;    
`

export const ContainerCountdown = styled.div`
    width: 45px;
    height: 60px;
    background: #0B1111;
    box-shadow: 0px 0px 6px #0ABCD5;        
`

export const ContainerNumber = styled.div`
    border-top: 1px solid #38E6FE;  
`

export const ContainerDay = styled.div`
    height:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`