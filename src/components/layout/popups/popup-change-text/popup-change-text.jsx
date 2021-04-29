import React from 'react';
import './popup-change-text.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeText({hidden, closePopup, changeContent, currentElement}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки комментария">
      <div className="change-text-container">
        <label htmlFor="content" className='change-text'>
          Комментарий:
          <input type="text" id="content"
                 onChange={(e) => changeContent(e, 'content')}
                 value={currentElement.content}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeText.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired
};

export default PopupChangeText;
