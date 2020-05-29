import '../styles.css';
import Layout from '../components/layout';
import FacIdContextProvider from '../components/FacIdContext';
import DbInfoContextProvider from '../components/DbInfoContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FacIdContextProvider>
      <DbInfoContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </DbInfoContextProvider>
    </FacIdContextProvider>
  )
}