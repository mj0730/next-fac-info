import Head from 'next/head';
import DetailsPay from './DetailsPay';
import DetailsStaffing from './DetailsStaffing';
import DetailsInformation from './DetailsInformation';

const FacilityPage = ({currentFacPay, currentFacInfo, currentFacLocality}) => {
  const changeToPercentage = (num) => {
    return (num * 100).toFixed(2);
  }

  return (
    <div id="facility-info">
      <Head>
        <title>{`${currentFacInfo.name} - pointSixtyFive`}</title>
      </Head>
    
      <header>
        <h1>{currentFacInfo.id}</h1>
        <p>{currentFacInfo.name}</p>
      </header>

      <main>
        <DetailsInformation />
        <DetailsPay currentFacPay = {currentFacPay} />

        <h2>Locality</h2>
        <p>Rate: {changeToPercentage(currentFacLocality[1]) + '%'}</p>
        <p>Area: {currentFacLocality[0]}</p>
        <DetailsStaffing />
      </main>
    </div>
    )
}

export default FacilityPage