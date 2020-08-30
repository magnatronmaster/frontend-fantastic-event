import styled, {createGlobalStyle} from 'styled-components'

import background from './assets/banner-image.png'

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background-image: url(${background});
        background-attachment: fixed;
        background-size:cover;
        overflow-X:hidden;
        
    }
`

export const LightTemplate = styled.div`
display:flex;
justify-content:center;
align-items:center;
`