import { Text } from 'minimal-components-react/dist/components/Text';
import Image from 'minimal-components-react/dist/components/Image';
import Input from 'minimal-components-react/dist/components/Input';
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts/language/context';
// import NotificationContext from '../../contexts/notification/context';
// import Input from 'minimal-components-react/dist/components/Input';
// import { default as lightTheme } from '../../styles/themes/light.json';
import { withTheme } from 'styled-components';
import { default as socialMedia } from '../Contact/socialMedia.json';

const Box = (_props: { id?; theme?; navigate; location }) => {
  const language = useContext(LanguageContext);
  const buyValue = 55000;
  const rentValue = 1500;
  const [type, setType] = useState<string | undefined>(undefined);
  const [currentValue, setCurrentValue] = useState(
    type === 'rent' ? rentValue : buyValue
  );
  const [gift, setGift] = useState(
    currentValue >= (type === 'rent' ? rentValue : buyValue)
  );

  useEffect(() => {
    console.log('type', type);
    setCurrentValue(type === 'rent' ? rentValue : buyValue);
  }, [type]);

  useEffect(() => {
    setGift(currentValue >= (type === 'rent' ? rentValue : buyValue));
  }, [currentValue]);

  const getMessage = () => {
    const message =
      (language?.box?.contact0 || 'Eu quero') +
      ' ' +
      (type === 'buy'
        ? language?.box?.buy || 'comprar'
        : language?.box?.rent || 'alugar') +
      ' ' +
      (language?.box?.contact4 || 'seu Box') +
      ' ' +
      (language?.box?.contact1 || 'por') +
      ' ' +
      currentValue +
      ' ' +
      (language?.box?.currency || 'reais') +
      '!';

    console.log('message', message);

    return message;
  };

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
      <div style={{ width: '100%', display: 'inline-flex' }}>
        <Text
          style={{
            minWidth: `${
              14 * 0.51 * (language?.box?.contact0 || 'Eu quero').length
            }px`,
            maxWidth: `${
              14 * 0.51 * (language?.box?.contact0 || 'Eu quero').length
            }px`,
            alignSelf: 'center',
          }}
        >
          {language?.box?.contact0 || 'Eu quero'}
        </Text>
        <Input
          setValue={() => setType('buy')}
          tag
          name="type"
          type={'radio'}
          id={'buy'}
          baseValue={'buy'}
          value={type}
        />
        <label
          htmlFor="buy"
          style={{
            margin: '0 5px',
            padding: '5px',
            borderRadius: '3px',
            maxHeight: '25px',
            minHeight: '25px',
            height: '25px',
            alignSelf: 'center',
          }}
        >
          {language?.box?.buy || 'Comprar'}
        </label>
        <Input
          setValue={() => setType('rent')}
          tag
          name="type"
          type={'radio'}
          id={'rent'}
          baseValue={'rent'}
          value={type}
        />
        <label
          htmlFor="rent"
          style={{
            margin: '0 5px',
            padding: '5px',
            borderRadius: '3px',
            maxHeight: '25px',
            minHeight: '25px',
            height: '25px',
            alignSelf: 'center',
          }}
        >
          {language?.box?.rent || 'Comprar'}
        </label>
        <Text
          style={{
            minWidth: `${
              14 * 0.51 * (language?.box?.contact1 || 'por').length
            }px`,
            maxWidth: `${
              14 * 0.51 * (language?.box?.contact1 || 'por').length
            }px`,
            alignSelf: 'center',
          }}
        >
          {language?.box?.contact1 || 'por'}
        </Text>
        <Input
          type={'number'}
          value={currentValue}
          setValue={setCurrentValue}
          style={{
            margin: '0 5px',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            minWidth: `${
              14 * 0.51 * (language?.box?.currency || 'reais').length
            }px`,
            maxWidth: `${
              14 * 0.51 * (language?.box?.currency || 'reais').length
            }px`,
            alignSelf: 'center',
          }}
        >
          {language?.box?.currency || 'reais'}
        </Text>
      </div>
      <Text>
        {type === 'buy' || (type == undefined && gift)
          ? language?.box?.contact2 || 'e ganhar um site de brinde!'
          : ''}
      </Text>
      <br />
      <br />
      <Input
        type={'submit'}
        style={{ margin: '5px', padding: '5px', borderRadius: '3px' }}
        value={language?.box?.contact3 || 'Entrar em contato!'}
        onClick={() => {
          console.log('click');
          window?.open(
            `https://api.whatsapp.com/send?phone=${
              socialMedia?.WhatsApp?.phone
            }&text=${encodeURI(getMessage())}`,
            '_blank'
          );
        }}
      />
      <br />
      <br />
    </>
  );
};

export default withTheme(Box);
