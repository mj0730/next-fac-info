import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import * as facs from '../scripts/facility_info';

const Index = () => (
  <Layout>
    <Head>
      <title>Title of page</title>
    </Head>

    <div className="index-NavColumn">
      <ul>
        <li>placeholder</li>
      </ul>

    </div>
    
    
    <div className="index-DisplayColumn"></div>



  </Layout>
)

export default Index