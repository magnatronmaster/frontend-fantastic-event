import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 40px;
  border-radius: 5px;
`;

export const MenuContainer = styled.nav``;

export const LogoImage = styled.img`
  max-width: 200px;
  height: auto;
`;

export const HeaderMenuList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const HeaderMenuItem = styled.li`
  padding: 10px;
`;

export const HeaderMenuLink = styled(Link)`
  color: var(--main-color);
  text-decoration: none;
  :hover {
    transition: 0.3s;
    color: var(--primary-color);
  }
`;
