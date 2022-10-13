import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import FacIdContextProvider from '../components/context/FacIdContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import '../styles.css';

const theme = createTheme();
const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <FacIdContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FacIdContextProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
