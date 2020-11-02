import PropTypes from 'prop-types';
import PageLinks from './PageLinks';
import SearchBox from './SearchBox';
import { version } from '../package.json';

function Layout({ children }) {
  return (
    <div className='index-grid-container'>
      <div className='index-nav-column'>
        <SearchBox />
        <PageLinks />
        <div className='version'>v{version}</div>
      </div>

      <div className='index-display-column'>{children}</div>

      <footer className='index-footer'>
        <img src='circle_logo.png' width='24' height='24' alt='Logo' />
        <a href='https://pointsixtyfive.com'>pointSixtyFive.com</a>
      </footer>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
