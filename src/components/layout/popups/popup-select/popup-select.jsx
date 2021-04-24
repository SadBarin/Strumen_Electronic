import React from 'react';
import './popup-select.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupSelect({ hidden, closePopup, changeLogic }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Выберите логику">
      <select className="select" onChange={(e) => changeLogic(e)}>
        <option value="1">1</option>
        <option value="0">0</option>
        <option value="NOT">NOT</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="OR">OR</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
        <option value="XNOR">XNOR</option>
      </select>
    </PopupWrapper>
  );
}

PopupSelect.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  changeLogic: PropTypes.func.isRequired
};

export default PopupSelect;
