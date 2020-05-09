import React from 'react';
import Link from 'next/link';

const PageLinks = (props) => {

  return (
    <div id="page-links">
      <Link href="/"><a>Home</a></Link>
      <Link href="/facilities">Facilities</Link>
      <Link href="/map">Map</Link>
    </div>
  )
}

export default PageLinks;