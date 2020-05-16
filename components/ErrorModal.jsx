import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({facId}) => {

  return (
    <div id="modal">
      <p>{`${facId} is not a valid ID. Please enter a valid facility ID.`}</p>
    </div>
  )
}

export default ErrorModal;

ErrorModal.propTypes = {
  facId: PropTypes.string.isRequired
};