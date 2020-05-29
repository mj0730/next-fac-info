import React from 'react';
import PropTypes from 'prop-types';

const DetailsStaffing = ({data}) => (
  <section id='fac-staffing'>
    <h2>Staffing</h2>
    <p>{data['Facility ID']}</p>

  </section>

)

export default DetailsStaffing;

DetailsStaffing.propTypes = {
  data: PropTypes.object.isRequired
};

//keys of data object
/*

AG (SWB)
ATCS in Training (SWB)
ATCS in Training minus LTH (Calculation)
ATCS in Training on Long Term Hold (SWB)
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
Current # of CPC On-Board (SWB)
Current # of CPC On-Board minus Temps minus LTH (Calculation)
Current % CPC to Target (Calculation)
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