import React /*, { useContext }*/ from 'react';

// import Header from '../../components/Header';
import Footer from '../../components/Footer';

import NotificationContext from '../../contexts/notification/context';
import Notification from 'minimal-components-react/dist/components/Notification';
import { Wrapper } from 'minimal-components-react/dist/components/Content';

import { LayoutWrapper } from 'minimal-components-react/dist/components/Content';
// import { UserContext } from '../../contexts/user/context';
import { withTheme } from 'styled-components';

// const menu = ['regular', 'transparent', 'inverted'];

const Layout = (props: {
  children?;
  title?: string;
  setTitle;
  search;
  setSearch;
}) => {
  //! TODO: Menu
  // const userContext = useContext(UserContext);

  return (
    <>
      <Wrapper isBackground>
        <>
          {/* <Header setTitle={props?.setTitle} title={props?.title} /> */}
          <Notification context={NotificationContext} />
          <LayoutWrapper id="mainLayoutWrapper">
            {props?.children}
          </LayoutWrapper>
          <Footer search={props?.search} setSearch={props?.setSearch} />
        </>
      </Wrapper>
    </>
  );
};

export default withTheme(Layout);
