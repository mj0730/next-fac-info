import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'
import Pay from './Pay';
import Staffing from './Staffing';
import Information from './Information';

const FacilityPage = (props) => (
  <Layout>
    <Head>
      <title>Title of page</title>
    </Head>
  
    <header>
      <h1>FacID</h1>
      <p>FacName</p>
    </header>

    <main>
      <Pay />
    </main>

  </Layout>
  )

export default FacilityPage