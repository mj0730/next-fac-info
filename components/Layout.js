import React from 'react';
import PageLinks from './PageLinks';
import SearchBox from './SearchBox';

function Layout(props) {
  return (
    <div className='index-grid-container'>
      <div className='index-nav-column'>
        <SearchBox />
        <PageLinks />
        <div className='version'>v1.0</div>
      </div>

      <div className='index-display-column'>{props.children}</div>

      <footer className='index-footer'>
        <img src='circle_logo.png' alt='Logo' /> <a href='https://pointsixtyfive.com'>pointSixtyFive.com</a>
      </footer>
    </div>
  );
}

export default Layout;
