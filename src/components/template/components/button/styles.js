import styled from 'styled-components'


export const Button = styled.button`  
  border-radius: 3px;
  border: 3px solid #38E6FE;  
  margin: 0 1em;
  padding: 0.25em 1em;  
  background: transparent;
  margin:20px;
  
`
// truco para hacer textos degradados con background-clip, los 3 ultimos atributos

export const TextButton = styled.p`
    font-family: Noto Sans JP;
		font-style: normal;
		font-weight: 300;
		font-size: 14px;		
		line-height: 20px;
    text-align: center;
    color: transparent;
		background: linear-gradient(180deg, #FFFFFF 43.23%, #0ABCD5 100%);
		-webkit-background-clip: text;
`

