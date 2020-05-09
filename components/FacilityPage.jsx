import Head from 'next/head';
import Layout from './layout'
import Pay from './Pay';
import Staffing from './Staffing';
import Information from './Information';

const FacilityPage = ({currentFacPay, currentFacInfo, currentFacLocality}) => {
  console.log(currentFacPay, currentFacInfo)

  const changeToPercentage = (num) => {
    return (num * 100).toFixed(2);
  }

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
        <Pay currentFacPay = {currentFacPay} />

        <h2>Locality</h2>
        <p>Rate: {changeToPercentage(currentFacLocality[1]) + '%'}</p>
        <p>Area: {currentFacLocality[0]}</p>
      </main>

    </Layout>
    )
}

export default FacilityPage