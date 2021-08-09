import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MenuContainer } from './style';

// import { Container } from './styles';

const Menu = ({ show, opacity }) => {
  const route = useRouter()
  return (
    <MenuContainer show={show} opacity={opacity}>
      <ul>
        <li className={route.pathname === "/" ? "active" : ""}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={route.pathname === "/articles" ? "active" : ""}>
          <Link href="/articles">
            Blog
          </Link>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default Menu;