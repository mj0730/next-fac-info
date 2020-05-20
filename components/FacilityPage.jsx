import PropTypes from 'prop-types';
import Head from 'next/head';
import DetailsPay from './DetailsPay';
import DetailsStaffing from './DetailsStaffing';
import DetailsInformation from './DetailsInformation';

const FacilityPage = ({currentFacPay, currentFacInfo, currentFacLocality}) => {
  const changeToPercentage = (num) => {
    return (num * 100).toFixed(2);
  }

  const toTitleCase = (str) => {
    str = str.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))

      return str.join(' ')
    }

  return (
    <div id="facility-info" className="grid-container fac-page-grid">
      <Head>
        <title>{`${currentFacInfo.name} - pointSixtyFive`}</title>
      </Head>
    
      <header>
          <div className="flex-col">
          <h1>{currentFacInfo.id}</h1>
          <p>{currentFacInfo.name}</p>

          </div>

          <div className="flex-col align-flex-end">
            <h1>Level {currentFacInfo.level}</h1>
            <p>{toTitleCase(currentFacInfo.type)}</p>
          </div>
      </header>

      <main>
        <DetailsInformation currentFacInfo = {currentFacInfo} />
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

FacilityPage.propTypes = {
  currentFacInfo: PropTypes.object.isRequired,
  currentFacLocality: PropTypes.array.isRequired,
  currentFacPay: PropTypes.object.isRequired
};