import { useContext } from 'react';
import Link from 'next/link';
import { FacIdContext } from './context/FacIdContext';

import HomeIcon from '@mui/icons-material/Home';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MapIcon from '@mui/icons-material/Map';

const PageLinks = () => {
  const [, storeFacId, , setDisplayFrontPage] = useContext(FacIdContext);

  const handleClick = () => {
    setDisplayFrontPage(true);
    storeFacId('');
  };

  return (
    <nav id='page-links'>
      <ul>
        <li>
          <Link href='/'>
            <a onClick={handleClick}>
              <HomeIcon /> <span className='hide-text'>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/facilities'>
            <a>
              <TrackChangesIcon /> <span className='hide-text'>Facilities</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/map'>
            <a>
              <MapIcon /> <span className='hide-text'>Map</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageLinks;
