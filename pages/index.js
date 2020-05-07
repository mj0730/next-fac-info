import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import * as facs from '../scripts/facility_info';
import FacilityPage from './FacilityPage';
import SearchBox from './SearchBox';

const Index = (props) => {
  const [FacId, setFacId] = useState('')

  return (
    <Layout>
      <Head>
        <title>Title of page</title>
      </Head>

      <div className="index-NavColumn">
        <SearchBox setFacId={setFacId} FacId = {FacId}/>

      </div>
      
      
      <div className="index-DisplayColumn">
        <FacilityPage facs = {facs} />

      </div>



    </Layout>
)}

export default Index