import styled from 'styled-components';
import { device } from 'assets/Breakpoints';

export const EditEventContainer = styled.div``;

export const TemplateImageContainer = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BasicData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6%;
  margin: 0 4%;
  background: lightgray;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const BasicDataContain = styled.div`
  width: 100%;
`;
