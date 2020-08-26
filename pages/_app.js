import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import Layout from '../components/Layout.js';
import FacIdContextProvider from '../components/context/FacIdContext';
import DbInfoContextProvider from '../components/context/DbInfoContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FacIdContextProvider>
      <DbInfoContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DbInfoContextProvider>
    </FacIdContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};
