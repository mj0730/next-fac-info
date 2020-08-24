import Head from 'next/head';
import React from 'react';
import { Map } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import { useState, useEffect, useContext } from 'react';
import * as facs from '../scripts/facility_info';
import L from 'leaflet';

const center = [40, -98.5];
const zoom = 5;

const LeafletMap = () => {
  return (
    <div id='map-container'>
      <Head>
        <title>pointSixtyFive - Facility and Locality Map</title>
      </Head>

      <Map id='map' center={center} zoom={zoom}></Map>
    </div>
  );
};

export default LeafletMap;
