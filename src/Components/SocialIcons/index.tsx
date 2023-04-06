import React from "react";
import { SocialContainer } from "./styles";
import Link from "next/link";

interface SocialProps {
  social: Array<{
    name: string;
    link: string;
    icon: any;
    classFill?: string;
  }>;
}

const SocialIcons: React.FC<SocialProps> = ({ social }) => {
  return (
    <>
      <SocialContainer>
        {social.map((item) => {
          return (
            <div className="social" key={item.name}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className={item.classFill && item.classFill}
              >
                {item.icon}
              </Link>
            </div>
          );
        })}
      </SocialContainer>
    </>
  );
};

export default SocialIcons;
