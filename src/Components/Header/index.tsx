import React from 'react';
import Link from 'next/link';

import * as S from './styles'

interface HeaderProps {
    logo: string
}

const Header: React.FC<HeaderProps> = ({ logo, children }) => {
    return (
        <S.HeaderContainer>
            <div className="container">
                <h1>
                    <Link href="/">
                        <a>
                            {children}
                            {logo}
                        </a>
                    </Link>
                </h1>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;