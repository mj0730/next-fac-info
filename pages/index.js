import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as facs from '../scripts/facility_info.js';
import { DbInfoContext } from '../components/context/DbInfoContext';
import { FacIdContext } from '../components/context/FacIdContext';
import FacilityPage from '../components/FacilityPage';
import FrontPage from '../components/FrontPage';
import ErrorModal from '../components/ErrorModal';

const PORT = process.env.PORT || 3001;

//Get facility info from the database
export async function getStaticProps() {
  const result = await fetch(`http://localhost:${PORT}/api/getAllFacilityData`).then((res) => res.json());

  const data = {};
  result.forEach((x) => (data[x['Facility ID']] = x));

  return {
    props: { data },
  };
}

const Index = ({ data }) => {
  const [DbInfo, setDbInfo] = useContext(DbInfoContext);
  const [FacId, storeFacId, displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [currentFacLocality, setCurrentFacLocality] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [idForModal, setIdForModal] = useState('');

  //set context from database
  useEffect(() => {
    setDbInfo(data);
  }, []);

  //Modal
  const showModal = (input) => {
    if (displayErrorModal) setDisplayErrorModal(false);

    setIdForModal(input);

    setTimeout(() => {
      setDisplayErrorModal(true);
    }, 100);
  };

  //'Lock' valid facility into place for rendering
  useEffect(() => {
    if (facs.FACILITIES[FacId]) {
      setCurrentFacPay(facs.completePayTable(FacId));
      setCurrentFacInfo(facs.FACILITIES[FacId]);
      setCurrentFacLocality(facs.getLocality(FacId));
      setDisplayFrontPage(false);
      if (displayErrorModal) setDisplayErrorModal(false);
    } else if (FacId.length === 3) {
      setCurrentFacInfo({
        id: `${FacId}`,
        name: 'Please use a valid Facility ID.',
      });
      setCurrentFacPay('');
      setCurrentFacLocality('');
      showModal(FacId);
    }
  }, [FacId]);

  return (
    <main>
      {displayFrontPage ? (
        <FrontPage />
      ) : (
        <FacilityPage
          currentFacPay={currentFacPay}
          currentFacInfo={currentFacInfo}
          currentFacLocality={currentFacLocality}
        />
      )}
      {idForModal && <ErrorModal facId={idForModal} displayErrorModal={displayErrorModal} />}
    </main>
  );
};
export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired,
};
