import { ItemList } from 'minimal-components-react/dist/components/Drawer/styles';
import {
  FlexContainer,
  SimpleContentWrapper,
} from 'minimal-components-react/dist/components/Content';
import React, { useContext } from 'react';
// import { Link } from 'minimal-components-react/dist/components/Text';
// import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from 'react-icons/im';
// import { SiInstagram } from "react-icons/si";
import { default as socialMedia } from './socialMedia.json';
import { withTheme } from 'styled-components';
import IconModel from '../../models/iconModel';
import { LanguageContext } from '../../contexts/language/context';
import { Link } from 'minimal-components-react/dist/components/Text';

const Contact = () => {
  const { contact } = useContext(LanguageContext);

  const icons = {
    WhatsApp: {
      icon: <ImWhatsapp size={50} color={'#0ACF83'} />,
    },
  };

  const iconsList: Array<IconModel> = [];

  for (const key in icons) {
    if (icons.hasOwnProperty(key)) {
      const icon = icons[key];
      const href = socialMedia[key];
      const text = contact.socialMedia[key];
      iconsList.push({
        icon: icon.icon,
        href: href.href + text.text,
        alt: key,
      });
    }
  }

  return (
    <FlexContainer id="contact">
      <SimpleContentWrapper>
        <ItemList>
          {iconsList.map((e, index) => {
            return (
              <Link
                icon
                target="_blank"
                rel="noopener noreferrer external"
                alt={e.alt}
                aria-label={e.alt}
                key={index}
              >
                <a href={e.href}>{e.icon}</a>
              </Link>
            );
          })}
        </ItemList>
      </SimpleContentWrapper>
    </FlexContainer>
  );
};

export default withTheme(Contact);
