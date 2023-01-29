/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language/context';
import { withTheme } from 'styled-components';
import Item from '../Item';
import { default as items } from './products.json';
import { Text } from 'minimal-components-react/dist/components/Text';

const Home = (_props: { id?; theme?; navigate; location }) => {
  const language = useContext(LanguageContext);

  return (
    <>
      <Text sizeType={'h1'}>{language?.home.title}</Text>
      <>
        {items.map((item, index) => {
          // console.log('item priceTable', item.priceTable);
          return !item.disabled ? <Item {...item} key={index} /> : <></>;
        })}
      </>
    </>
  );
};

export default withTheme(Home);
