import React from 'react';
import Link from 'next/link';

import HomeIcon from '@material-ui/icons/Home';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import MapIcon from '@material-ui/icons/Map';

const PageLinks = (props) => {

  return (
    <nav id="page-links">
      <ul>
        <li><Link href="/"><a><HomeIcon/> Home</a></Link></li>
        <li> <Link href="/facilities"><a><TrackChangesIcon/> Facilities</a></Link></li>
        <li><Link href="/map"><a><MapIcon/> Map</a></Link></li>
      </ul>
    </nav>
  )
}

export default PageLinks;