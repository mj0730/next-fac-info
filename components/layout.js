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
    </div>
  )
}

export default Layout