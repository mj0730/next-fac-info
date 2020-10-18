import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connectToDatabase } from '../utils/mongodb';
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

  const infoResult = await db.collection('facilitydata').find().project({ _id: 0 }).toArray();
  const infoData = {};
  infoResult.forEach((x) => (infoData[x['facId']] = x));

  for (let key in data) {
    Object.assign(data[key], infoData[key]);
    delete data[key]['facId'];
  }

  return {
    props: { data, payScaleData },
  };
}

const Index = ({ data, payScaleData }) => {
  const [FacId, , displayFrontPage, setDisplayFrontPage] = useContext(FacIdContext);
  const [currentFacPay, setCurrentFacPay] = useState('');
  const [currentFacInfo, setCurrentFacInfo] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [idForModal, setIdForModal] = useState('');

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
    if (data[FacId]) {
      setCurrentFacPay(payScaleData[FacId]);
      setCurrentFacInfo(data[FacId]);
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
        <FacilityPage currentFacPay={currentFacPay} currentFacInfo={currentFacInfo} nationalData={data.National} />
      )}
      {idForModal && <ErrorModal facId={idForModal} displayErrorModal={displayErrorModal} />}
    </main>
  );
};
export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired,
  payScaleData: PropTypes.object.isRequired,
};
