import React from 'react';
import './popup-upload.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupUpload({hidden, closePopup, setSaveFile}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Загрузить сохранение">
      <div className="change-gate-container">
        <label htmlFor="load" className='input-load'>
          Файл:
          <input type="file" id="load" onChange={(e) => {setSaveFile(e)}}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupUpload.propTypes = {
  hidden: PropTypes.bool.isRequired,
  setSaveFile: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default PopupUpload;
