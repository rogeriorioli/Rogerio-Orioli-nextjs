import React from 'react';
import Header from '../Components/CardPortifolio/Header';

const Layouts: React.FC = ({ children }) => {
  return (
    <>
      <Header logo="Rogerio Orioli">
        <img src="/static/images/rogerio.jpg" srcSet="/static/images/rogerio.jpg" loading="lazy" />
      </Header>
      {children}
    </>
  );
}

export default Layouts;