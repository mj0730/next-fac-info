import {useState} from 'react';
import PageLinks from './PageLinks';
import SearchBox from './SearchBox';

function Layout(props) {
  const [FacId, setFacId] = useState('');

  return (
    <div className="index-grid-container">
      <div className="index-NavColumn">
        <SearchBox setFacId={setFacId} FacId = {FacId}/>
        <PageLinks />
      </div>
      
      <div className="index-DisplayColumn">
        {props.children}
      </div>
    </div>
  )
}

export default Layout