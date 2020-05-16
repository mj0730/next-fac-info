import '../styles.css';
import Layout from '../components/layout';
import FacIdContextProvider from '../components/FacIdContext';
import ErrorModalContext from '../components/ErrorModalContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FacIdContextProvider>
      <ErrorModalContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorModalContext>
    </FacIdContextProvider>
  )
}