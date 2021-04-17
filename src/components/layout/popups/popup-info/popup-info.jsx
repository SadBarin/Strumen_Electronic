import React from 'react';
import './popup-info.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupInfo({ hidden, closePopup }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Информация о логике">
      <div>
        <p><b>OR</b> - логическое ИЛИ</p>
        <p><b>AND</b> - логическое И</p>
      </div>
    </PopupWrapper>
  );
}

PopupInfo.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default PopupInfo;
