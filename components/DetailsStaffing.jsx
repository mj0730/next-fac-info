import React from 'react';
import PropTypes from 'prop-types';
import DetailsStaffingTable from './DetailsStaffingTable';

function changeToPercentage(num) {
  return `${(num * 100).toFixed(1)}%`;
}

const DetailsStaffing = ({ data }) => {
  const cpcDetails = [
    { text: 'Total', data: data['Current # of CPC On-Board'] },
    { text: 'Target', data: data['CPC Target'] },
    { text: '% Target', data: changeToPercentage(data['Current % CPC to Target']) },
    { text: 'CPC-Trainee%', data: changeToPercentage(data['Current % CPC to Trainees']) },
  ];

  const cpcitDetails = [
    { text: 'CPCIT0', data: data['CPCIT0'] },
    { text: 'CPCIT1', data: data['CPCIT1'] },
    { text: 'CPCIT2', data: data['CPCIT2'] },
    { text: 'CPCIT3', data: data['CPCIT3'] },
  ];

  const devDetails = [
    { text: 'AG', data: data['AG'] },
    { text: 'Dev1', data: data['Dev1'] },
    { text: 'Dev2', data: data['Dev2'] },
    { text: 'Dev3', data: data['Dev3'] },
  ];

  return (
    <section id='fac-staffing'>
      <h2>Staffing</h2>
      <DetailsStaffingTable data={cpcDetails} title={'CPC'} />
      <DetailsStaffingTable data={cpcitDetails} title={'CPC-IT'} />
      <DetailsStaffingTable data={devDetails} title={'Developmental'} />
    </section>
  );
};

export default DetailsStaffing;

DetailsStaffing.propTypes = {
  data: PropTypes.object.isRequired,
};

//keys of data object
/*

AG (SWB)
ATCS in Training
ATCS in Training minus LTH
ATCS in Training on Long Term Hold
CPC Target
CPC on Long Term Hold (SWB)
CPC on Temp (SWB)
CPCIT Total (SWB)
CPCIT0 (SWB)
CPCIT1 (SWB)
CPCIT2 (SWB)
CPCIT3 (SWB)
Committed ATCS Inbound (SWB)
Committed ATCS Outbound (SWB)
CoreAirport
Current # of CPC On-Board
Current # of CPC On-Board minus Temps minus LTH (Calculation)
Current % CPC to Target
Current % CPC to Trainees
Current ATCS in Training Expected to Cert (Calculation)
Dev Total (SWB)
Dev1 (SWB)
Dev2 (SWB)
Dev3 (SWB)
District
ERR Category
Facility ID
Facility Name
Facility Type
HRRegion
Inbounds Expected to Cert + Temps Inbound (Calculation)
Level
Placement List Inbounds
Placement List Outbounds (ERR, Hardship)
Possible Gains to Target (Calculation)
Possible Losses
Projected % to Target (Calculation)
Projected Retirements and Other Losses (Finance)
Service Area
TNE (SWB)
Temps Inbound (SWB)
Temps Outbound (SWB)
Training Success Rate (NTD)
Training Time Years (NTD)
Type
_id

*/
