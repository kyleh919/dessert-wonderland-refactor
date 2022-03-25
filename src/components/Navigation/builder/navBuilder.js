import styled from 'styled-components';

import { PAGE_INFO_MAP } from '../../../page-info/pageInfo';

const NavList = styled.ul`
  display: flex;
  padding: 0px;
`;

const NavListItem = styled.li`
  margin: 28px;
  list-style: none;
`;

export default function navBuilder() {
  function build() {
    console.log('building nav links...');
    console.log('PAGE_INFO_MAP = ', PAGE_INFO_MAP);

    return (
      <nav id="nav-list">
        <NavList>
          <NavListItem className="nav-items">
            <a href="./pages/menus.html">Menus</a>
          </NavListItem>
          <NavListItem className="nav-items">
            <a href="#">Dessert Artists</a>
          </NavListItem>
          <NavListItem className="nav-items">
            <a href="./pages/order-ahead.html">Order Ahead</a>
          </NavListItem>
        </NavList>
      </nav>
    );
  }

  return build();
}
