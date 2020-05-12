import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import * as facs from '../scripts/facility_info';  //refactor to only import needed object
import FacilityListItem from '../components/FacilityListItem';

const Facilites = () => {

  const {FACILITIES} = facs;
  
  return (
    <div id="container">
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <table>
        <tbody>
          <FacilityListItem facilities={FACILITIES} />
        </tbody>
      </table>
    </div>
)}

export default Facilites;