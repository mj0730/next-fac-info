import '../styles.css';
import Layout from '../components/layout';
import FacIdContextProvider from '../components/FacIdContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FacIdContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </FacIdContextProvider>
  )
}