import React from 'react';
import { SocialContainer } from './styles';


interface SocialProps {
    social : Array<{
        name : string,
        link : string, 
        icon : any
    }>
}

const SocialIcons: React.FC<SocialProps> = ({social, children}) => {
  return(
      <>
      <SocialContainer>
          {social.map(item => {
              return(
                <div className="social" key={item.name}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
                        {item.icon}
                    </a>    
                </div>
              )
          })}
      </SocialContainer>    
      </>
  );
}

export default SocialIcons;