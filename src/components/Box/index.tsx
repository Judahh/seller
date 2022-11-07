import { Text } from 'minimal-components-react/dist/components/Text';
import Image from 'minimal-components-react/dist/components/Image';
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language/context';
// import NotificationContext from '../../contexts/notification/context';
// import Input from 'minimal-components-react/dist/components/Input';
// import { default as lightTheme } from '../../styles/themes/light.json';
import { withTheme } from 'styled-components';

const Box = (_props: { id?; theme?; navigate; location }) => {
  const language = useContext(LanguageContext);
  return (
    <>
      <Text sizeType={'h1'} style={{ textAlign: 'center' }}>
        {language?.box?.title || 'Box'}
      </Text>
      <Text sizeType={'h2'} style={{ textAlign: 'center' }}>
        {language?.box?.subTitle || 'VENDA'}
      </Text>
      <br />
      <Text sizeType={'h3'}>{language?.box?.sector || 'VERDE'}</Text>
      <div
        style={{
          margin: '50px',
          // height: '70%'
        }}
      >
        <Image
          images={[
            'img/box/n0.png',
            'img/box/n1.png',
            'img/box/n2.png',
            'img/box/n3.png',
            'img/box/n4.png',
            'img/box/v0.jpeg',
            'img/box/v1.jpeg',
            'img/box/v2.jpeg',
            'img/box/e0.png',
            'img/box/e1.jpeg',
            'img/box/e2.jpeg',
            'img/box/m0.jpeg',
            'img/box/m1.png',
            'img/box/m2.png',
            'img/box/m3.webp',
          ]}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={true}
          // dynamicHeight={false}
          // centerMode={true}
          maxHeight={'70%'}
          // height={'70%'}
        ></Image>
      </div>
    </>
  );
};

export default withTheme(Box);
