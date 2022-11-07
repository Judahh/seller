import React from 'react'; //, { useContext } from "react";
import { StyledFooter } from './styles';
import { withTheme } from 'styled-components';

const Scroll = dynamic(
  () => import('minimal-components-react/dist/components/ScrollToSection'),
  {
    ssr: false,
  }
);
import dynamic from 'next/dynamic';
import Contact from '../Contact';

// const searchFullSize = 'calc(100% - 30px - 30px - 30px - 30px - 50px)';

const Footer = () => {
  return (
    <StyledFooter
      style={{
        width: '70px',
        bottom: '0px',
        right: '0px',
        left: 'unset',
        borderTop: '0px',
      }}
    >
      <Contact />
    </StyledFooter>
  );
};

export default withTheme(Footer);
