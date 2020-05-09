import React from 'react';
import Link from 'next/link';

const PageLinks = (props) => {

  return (
    <div id="page-links">
      <Link href="/"><a>Home</a></Link>
      <Link href="/facilities"><a>Facilities</a></Link>
      <Link href="/map"><a>Map</a></Link>
    </div>
  )
}

export default PageLinks;