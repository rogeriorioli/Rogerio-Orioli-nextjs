import React from "react";
import Image from "next/image";
import { HeroContainer } from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="image-container">
        <Image
          src="/static/images/rogeriohero.jpg"
          loading="lazy"
          width="356"
          height="475"
          alt="Rogerio Orioli Web Developer"
        />
      </div>
    </HeroContainer>
  );
};

export default Hero;
