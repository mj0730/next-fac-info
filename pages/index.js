import { useState, useEffect, useContext } from 'react';
import * as facs from '../scripts/facility_info';
import {FacIdContext} from '../components/FacIdContext';
import FacilityPage from '../components/FacilityPage';
import FrontPage from '../components/FrontPage';
import ErrorModal from '../components/ErrorModal';

const Index = (props) => {
  const [FacId, storeFacId, displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [currentFacLocality, setCurrentFacLocality] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  //'Lock' valid facility into place for rendering
  useEffect(() => {
    if (facs.FACILITIES[FacId]) {
      setCurrentFacPay(facs.completePayTable(FacId));
      setCurrentFacInfo(facs.FACILITIES[FacId]);
      setCurrentFacLocality(facs.getLocality(FacId));
      setDisplayFrontPage(false);
    } else if (FacId.length === 3) {
      setCurrentFacInfo({id: `${FacId} is not a valid identifier`, name: 'Please use a valid Facility ID.'});
      setCurrentFacPay('');
      setCurrentFacLocality('');
      setDisplayErrorModal(true);
    }
  }, [FacId])

  if (displayFrontPage) {
  return (
    <div>
      <FrontPage />
    </div>
  )} else {
    return (
      <div>
        <FacilityPage currentFacPay = {currentFacPay} currentFacInfo = {currentFacInfo} currentFacLocality = {currentFacLocality} />

        {(displayErrorModal) && 
          <ErrorModal facId = {'QRT'} />
        }
      </div>
    )
  }
}
export default Index