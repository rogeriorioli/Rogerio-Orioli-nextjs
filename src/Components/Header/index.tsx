import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi'
import * as S from './styles'
import Menu from './Menu';

interface HeaderProps {
    logo: string,

}

const Header: React.FC<HeaderProps> = ({ logo, children }) => {

    const [showMobile, setShowMobile] = useState<boolean>(false)


    const handleMobileMenu = () => {
        setShowMobile(!showMobile);
    }

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
                    <button onClick={handleMobileMenu}>
                        {showMobile ?
                            <HiOutlineX color="#fff" size={'3rem'} />

                            : <HiOutlineMenuAlt1 color="#fff" size={'3rem'} />
                        }
                    </button>
                    <Menu show={showMobile ? 'visible' : 'hidden'} opacity={showMobile ? 1 : 0} />
                </div>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;