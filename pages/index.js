import Layout from '../components/layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import * as facs from '../scripts/facility_info';
import FacilityPage from '../components/FacilityPage';
import SearchBox from '../components/SearchBox';
import PageLinks from '../components/PageLinks';

const Index = (props) => {
  const [FacId, setFacId] = useState('');
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [currentFacLocality, setCurrentFacLocality] = useState('');

  //'Lock' valid facility into place for rendering
  useEffect(() => {
    if (facs.FACILITIES[FacId]) {
      setCurrentFacPay(facs.completePayTable(FacId));
      setCurrentFacInfo(facs.FACILITIES[FacId]);
      setCurrentFacLocality(facs.getLocality(FacId));
    } else if (FacId.length === 3) {
      setCurrentFacInfo({id: `${FacId} is not a valid identifier`, name: 'Please use a valid Facility ID.'});
      setCurrentFacPay('');
      setCurrentFacLocality('');
    }
  }, [FacId])

  return (
    <Layout>
      <Head>
        <title>pointSixtyFive - Facility Information</title>
      </Head>

      <div className="index-NavColumn">
        <SearchBox setFacId={setFacId} FacId = {FacId}/>
        <PageLinks />

      </div>
      
      <div className="index-DisplayColumn">
        <FacilityPage currentFacPay = {currentFacPay} currentFacInfo = {currentFacInfo} currentFacLocality = {currentFacLocality}/>

      </div>



    </Layout>
)}

export default Index