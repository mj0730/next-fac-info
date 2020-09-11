import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as facs from '../scripts/facility_info.js';
import { connectToDatabase } from '../utils/mongodb';
import { DbInfoContext } from '../components/context/DbInfoContext';
import { FacIdContext } from '../components/context/FacIdContext';
import FacilityPage from '../components/FacilityPage';
import FrontPage from '../components/FrontPage';
import ErrorModal from '../components/ErrorModal';

//Get facility info from the database
export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const result = await db.collection('pptdata').find().project({ _id: 0 }).toArray();

  const data = {};
  result.forEach((x) => (data[x['Facility ID']] = x));

  const payResult = await db.collection('pay').find().project({ _id: 0 }).toArray();

  const payScaleData = {};
  payResult.forEach((x) => {
    payScaleData[x['fac_id']] = x;
  });

  const payTables = Object.values(payScaleData);

  return {
    props: { data, payTables, payScaleData },
  };
}

const Index = ({ data, payTables, payScaleData }) => {
  const [DbInfo, setDbInfo, payData, setPayData] = useContext(DbInfoContext);
  const [FacId, storeFacId, displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [idForModal, setIdForModal] = useState('');

  //set context from database
  useEffect(() => {
    setDbInfo(data);
    setPayData(payTables);
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
      setCurrentFacPay(payScaleData[FacId]);
      setCurrentFacInfo(facs.FACILITIES[FacId]);
      setDisplayFrontPage(false);
      if (displayErrorModal) setDisplayErrorModal(false);
    } else if (FacId.length === 3) {
      setCurrentFacInfo({
        id: `${FacId}`,
        name: 'Please use a valid Facility ID.',
      });
      setCurrentFacPay('');
      showModal(FacId);
    }
  }, [FacId]);

  return (
    <main>
      {displayFrontPage ? (
        <FrontPage />
      ) : (
        <FacilityPage currentFacPay={currentFacPay} currentFacInfo={currentFacInfo} />
      )}
      {idForModal && <ErrorModal facId={idForModal} displayErrorModal={displayErrorModal} />}
    </main>
  );
};
export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired,
  payTables: PropTypes.array.isRequired,
};
