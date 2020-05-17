import PageLinks from './PageLinks';
import SearchBox from './SearchBox';

function Layout(props) {

  return (
    <div className="index-grid-container">
      <div className="index-NavColumn">
        <SearchBox />
        <PageLinks />
      </div>
      
      <div className="index-DisplayColumn">
        {props.children}
      </div>

      <footer className="index-Footer"><a href="https://pointsixtyfive.com">pointSixtyFive.com</a></footer>
    </div>

  )
}

export default Layout