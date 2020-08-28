import {createGlobalStyle} from 'styled-components'

import background from './assets/fondo2.jpg'

export const GlobalStyle = createGlobalStyle `
    body{
        background-image: url(${background});
  background-attachment: fixed;
  background-size:cover;
  overflow-X:hidden;
    }
`