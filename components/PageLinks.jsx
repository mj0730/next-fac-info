import React, {useContext} from 'react';
import Link from 'next/link';
import {FacIdContext} from './FacIdContext';

import HomeIcon from '@material-ui/icons/Home';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import MapIcon from '@material-ui/icons/Map';

const PageLinks = () => {
  const [FacId, storeFacId, displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);

  const handleClick = () => {
    setDisplayFrontPage(true);
    storeFacId('')
  }

  return (
    <nav id="page-links">
      <ul>
        <li><Link href="/"><a onClick={handleClick}><HomeIcon/> <span className="hide-text">Home</span></a></Link></li>
        <li><Link href="/facilities"><a><TrackChangesIcon/> <span className="hide-text">Facilities</span></a></Link></li>
        <li><Link href="/map"><a><MapIcon/> <span className="hide-text">Map</span></a></Link></li>
      </ul>
    </nav>
  )
}

export default PageLinks;