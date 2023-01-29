import React, { useContext, useState } from 'react';
import { Sheet as S, H3, P, Cover } from './styles';
import Image from 'minimal-components-react/dist/components/Image';
import { LanguageContext } from '../../contexts/language/context';
import { formatCurrency } from 'minimal-components-react/dist/contexts/language';

// import { useNavigate } from 'react-router-dom';

const Item = (props: {
  name?: string;
  id?: string | number;
  images?: string[];
  description?: string;
  quantity?: number;
  price?: number;
  disabled?: boolean;
  link?: string;
}) => {
  const language = useContext(LanguageContext);
  const [titleElement, setTitleElement] = useState(undefined);
  return (
    <S>
      <div style={{ height: '100%', width: '100%' }}>
        <div
          onClick={() => {
            // props?.link
            // navigate(link, { replace: true });
            // return link;
          }}
        >
          <Image
            hasTitle={props?.name || false}
            hasDescription={props?.description || false}
            images={props?.images}
            disabled={
              props?.quantity == undefined ||
              props?.quantity == 0 ||
              props?.disabled
            }
            titleElement={titleElement}
            left={'<'}
            right={'>'}
          />
          {props?.name && (
            <H3
              disabled={props?.quantity == undefined || props?.quantity == 0}
              ref={(titleElement) => {
                setTitleElement(titleElement);
              }}
            >
              {props?.name}
            </H3>
          )}
          {props?.description ? (
            <P disabled={props?.quantity == undefined || props?.quantity == 0}>
              {props?.description}
            </P>
          ) : (
            <></>
          )}
          {props?.price ? (
            <P disabled={props?.quantity == undefined || props?.quantity == 0}>
              {formatCurrency(language?.format, props?.price)}
            </P>
          ) : (
            <></>
          )}
        </div>

        {props?.quantity == undefined || props?.quantity == 0 ? (
          <Cover>
            <p>{language?.product?.soldOut}</p>
          </Cover>
        ) : (
          <> </>
        )}
      </div>
    </S>
  ) as React.ReactElement;
};

export default Item;
