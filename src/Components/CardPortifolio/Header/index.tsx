import React from 'react';
import Link from 'next/link';

import * as S from './styles'
import { useRouter } from 'next/router';

interface HeaderProps {
    logo: string

}

const Header: React.FC<HeaderProps> = ({ logo, children }) => {

    const route = useRouter()
    return (
        <S.HeaderContainer>
            <div className="container">
                <div className="header-content">
                    <h1>
                        <Link href="/">
                            <a>
                                {children}
                                {logo}
                            </a>
                        </Link>
                    </h1>
                    <nav className="menu">
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
                    </nav>
                </div>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;