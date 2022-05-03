import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import FacIdContextProvider from '../components/context/FacIdContext';
import '../styles.css';

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
