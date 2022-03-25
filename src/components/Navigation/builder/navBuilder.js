import Link from 'next/link';
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

const NavLink = styled.a`
  color: black;
  text-decoration: none;
`;

export default function navBuilder() {
  function build() {
    console.log('building nav links...');
    console.log('PAGE_INFO_MAP = ', PAGE_INFO_MAP);

    return (
      <nav>
        <NavList>
          <NavListItem>
            <Link href="" passHref>
              <NavLink>Menus</NavLink>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="" passHref>
              <NavLink>Dessert Artists</NavLink>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="" passHref>
              <NavLink>Order Ahead</NavLink>
            </Link>
          </NavListItem>
        </NavList>
      </nav>
    );
  }

  return build();
}
