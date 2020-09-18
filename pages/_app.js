import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import Layout from '../components/Layout.js';
import FacIdContextProvider from '../components/context/FacIdContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FacIdContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FacIdContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
