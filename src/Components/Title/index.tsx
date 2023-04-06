import React from "react";
import { SectionTitle } from "./style";
import { ReactElement, ReactNode } from "react-markdown";

// import { Container } from './styles';

interface SectionTitle {
  contenTitle: string;
  children?: ReactNode;
}
const Title = ({ contenTitle, children }: SectionTitle) => {
  return (
    <SectionTitle>
      {children} {contenTitle}
    </SectionTitle>
  );
};

export default Title;
