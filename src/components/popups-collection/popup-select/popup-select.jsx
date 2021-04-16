import React from 'react';
import './popup-select.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupSelect({ hidden, closePopup }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Выберите логику">
      <select className="select">
        <option value="AND">AND</option>
        <option value="OR">OR</option>
      </select>
    </PopupWrapper>
  );
}

PopupSelect.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default PopupSelect;
