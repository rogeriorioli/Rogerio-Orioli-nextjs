import React from 'react';
import { SectionTitle } from './style';

// import { Container } from './styles';

interface SectionTitle {
    contenTitle : string
}
const Title: React.FC<SectionTitle> = ({children , contenTitle}) => {
  return(
  <SectionTitle>{children}{ contenTitle }</SectionTitle>
  );
}

export default Title;