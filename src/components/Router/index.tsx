import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import NotFound from 'minimal-components-react/dist/components/NotFound';
import { withTheme } from 'styled-components';
import Box from '../Box';

const useQuery = () => {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  return query;
};

const Router = (props: { title?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('Router props', navigate, location);

  const [title, setTitle] = useState(props?.title || '');
  const [search, setSearch] = useState('');
  const query = useQuery();
  const get = (param) => {
    const result = query.get(param) || undefined;
    return result;
  };

  // const [signedIn, _setSignedIn] = useState<boolean>(false);

  // isSignedIn(props.host.publicKey).then((signedIn) => {
  //   setSignedIn(signedIn);
  // });

  // useEffect(() => {} , [signedIn]);

  console.log('get("id")', get('id'));
  console.log('query', useQuery());

  useEffect(() => {}, [title, setTitle]);

  useEffect(() => {}, [search, setSearch]);

  return (
    <Fragment>
      <Layout
        title={title}
        setTitle={setTitle}
        search={search}
        setSearch={setSearch}
      >
        <Routes>
          <Route path="/">
            <Route path="">
              <Route
                path="box"
                element={<Box navigate={navigate} location={location} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default withTheme(Router);
