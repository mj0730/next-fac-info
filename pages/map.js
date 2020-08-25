import Head from 'next/head';
import React from 'react';

const LeafletMap = () => {
  return (
    <div id='map-container'>
      <Head>
        <title>pointSixtyFive - Facility and Locality Map</title>
      </Head>
      <iframe src='iframe/index.html'>
        Your browser can't display this content. Visit
        <a href='https://pointsixtyfive.com/xenforo/pages/LocalityMap/' target='_blank'>
          pointSixtyFive.com
        </a>
        to view this map.
      </iframe>
    </div>
  );
};

export default LeafletMap;
