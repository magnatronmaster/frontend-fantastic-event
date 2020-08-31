import styled from 'styled-components';

import {device} from 'assets/breakpoints';

export const FooterContainer = styled.footer`
  display:flex;
  background-color: var(--primary-color);
  border-radius: 10px 10px 0 0;
  padding-top: 20px;
  margin-top: 40px;
  justify-content:space-around;
  @media ${device.mobileM} {
    flex-direction:column;
  }

`;

export const FooterText = styled.h3`
  width: fit-content;
  
  color: white;
  font-size:15px;
`;
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ContainerList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContainerColumn = styled.div`
  color: white;
`;

export const LogoContainerWithText = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`