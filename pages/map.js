import React from 'react';
import Head from 'next/head';

const LeafletMap = () => {
  return (
    <div id='map-container'>
      <Head>
        <title>pointSixtyFive - Facility and Locality Map</title>
      </Head>
      <iframe src='iframe/index.html'>
        <p>
          Your browser can&apos;t display this content. Visit
          <a href='https://pointsixtyfive.com/xenforo/pages/LocalityMap/' target='_blank' rel='noreferrer'>
            pointSixtyFive.com
          </a>
          to view this map.
        </p>
      </iframe>
    </div>
  );
};

export default LeafletMap;
