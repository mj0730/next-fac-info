import { useState, useEffect, useContext } from 'react';
import * as facs from '../scripts/facility_info';
import { DbInfoContext } from '../components/DbInfoContext';
import { FacIdContext } from '../components/FacIdContext';
import FacilityPage from '../components/FacilityPage';
import FrontPage from '../components/FrontPage';
import ErrorModal from '../components/ErrorModal';

const Index = () => {
  const [DbInfo, setDbInfo] = useContext(DbInfoContext);
  const [FacId, storeFacId, displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [currentFacLocality, setCurrentFacLocality] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [idForModal, setIdForModal] = useState('');

  //Modal
  let facIdForModal;
  const showModal = (input) => {
    if (displayErrorModal) setDisplayErrorModal(false);
    
    setIdForModal(input);
    
    setTimeout(() => {
      setDisplayErrorModal(true);
    }, 100); 
  }

  //Get facility info from the database

  const getData = () => {

  }

  //'Lock' valid facility into place for rendering
  useEffect(() => {
    if (facs.FACILITIES[FacId]) {
      setCurrentFacPay(facs.completePayTable(FacId));
      setCurrentFacInfo(facs.FACILITIES[FacId]);
      setCurrentFacLocality(facs.getLocality(FacId));
      setDisplayFrontPage(false);
      if (displayErrorModal) setDisplayErrorModal(false);
    } else if (FacId.length === 3) {
      setCurrentFacInfo({id: `${FacId}`, name: 'Please use a valid Facility ID.'});
      setCurrentFacPay('');
      setCurrentFacLocality('');
      showModal(FacId);
    }
  }, [FacId])

  return (
    <main>
      {(displayFrontPage) ? 
        <FrontPage /> :
          <FacilityPage currentFacPay = {currentFacPay} currentFacInfo = {currentFacInfo} currentFacLocality = {currentFacLocality}/>
      }
      { 
        (idForModal) &&
        <ErrorModal facId = {idForModal} displayErrorModal= {displayErrorModal}/>
      }
    </main>
  )
    
}
export default Index