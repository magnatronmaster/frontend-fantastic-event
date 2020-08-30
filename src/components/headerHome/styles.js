import styled from 'styled-components' 

import homeImage from 'assets/images/homeEvent.jpg'

export const HeaderHomeContainer = styled.div`
background: url(${homeImage});
background-position: 0 -200px;
background-size: cover;
height: 400px;
margin: 40px 0;
display:flex;
justify-content: flex-end;
align-items: center;
`