import PageLinks from './PageLinks';
import SearchBox from './SearchBox';
import Head from 'next/head';

function Layout(props) {
  return (
    <div className='index-grid-container'>
      <div className='index-NavColumn'>
        <SearchBox />
        <PageLinks />
      </div>

      <div className='index-DisplayColumn'>{props.children}</div>

      <footer className='index-Footer'>
        <img src='circle_logo.png' alt='Logo' /> <a href='https://pointsixtyfive.com'>pointSixtyFive.com</a>
      </footer>
    </div>
  );
}

export default Layout;
