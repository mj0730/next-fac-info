import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import * as facs from '../scripts/facility_info';
import FacilityPage from '../components/FacilityPage';
import SearchBox from '../components/SearchBox';

const Index = (props) => {
  const [FacId, setFacId] = useState('');
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setcurrentFacInfo] = useState('');

  //'Lock' valid facility into place for rendering
  useEffect(() => {
    if (facs.FACILITIES[FacId]) {
      setCurrentFacPay(facs.completePayTable(FacId));
      setcurrentFacInfo(facs.FACILITIES[FacId]);
    } else if (FacId.length === 3) {
      setcurrentFacInfo({id: `${FacId} is not a valid identifier`, name: 'Please use a valid Facility ID.'});
    }
    // return () => {
    //   cleanup
    // }
  }, [FacId])

  return (
    <Layout>
      <Head>
        <title>Title of page</title>
      </Head>

      <div className="index-NavColumn">
        <SearchBox setFacId={setFacId} FacId = {FacId}/>

      </div>
      
      
      <div className="index-DisplayColumn">
        <FacilityPage facs = {facs} currentFacPay = {currentFacPay} currentFacInfo = {currentFacInfo}/>

      </div>



    </Layout>
)}

export default Index