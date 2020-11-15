import React from 'react';
import Image from 'next/image';
import { HeroContainer } from './styles';

const Hero: React.FC = (): JSX.Element => {
  return (
    <HeroContainer>
      <div className="image-container">
        <Image src='/static/images/rogeriohero.jpg' loading="lazy" width="356" height="475" />
      </div>
    </HeroContainer>
  );
}

export default Hero;
