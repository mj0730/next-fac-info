import Link from 'next/link';
import Head from 'next/head';
import Layout from './layout'
import Pay from './Pay';
import Staffing from './Staffing';
import Information from './Information';

const FacilityPage = ({currentFacPay, currentFacInfo}) => {
  console.log(currentFacPay, currentFacInfo)

  return (
    <Layout>
      <Head>
        <title>{`${currentFacInfo.name} - pointSixtyFive`}</title>
      </Head>
    
      <header>
        <h1>{currentFacInfo.id}</h1>
        <p>{currentFacInfo.name}</p>
      </header>

      <main>
        <Pay />
      </main>

    </Layout>
    )
}

export default FacilityPage