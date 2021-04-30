import React from 'react';
import './popup-wrapper.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function PopupWrapper({
  hidden, title, children, closePopup,
}) {
  const hiddenClass = (hidden) ? ' hidden' : ' cat';

  return (
    <div className={`popup-wrapper-overlay${hiddenClass}`}>
      <div className="popup-wrapper-bg" onClick={closePopup}/>

      <Draggable>
        <div className="popup-wrapper">
          <div className="popup-wrapper-header">
            <h3>{title}</h3>

            <button title="Закрыть" className="popup-wrapper-close" type="submit" onClick={closePopup}>
              <i className="bi bi-x-circle" />
            </button>
          </div>

          <div className="popup-wrapper-content">
            {children}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

PopupWrapper.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default PopupWrapper;
