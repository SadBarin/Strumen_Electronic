import React from 'react';
import './layout-text.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LayoutText(props) {
  const {
    id,
    x, y, pin,
    content,
    selectStatus,
    onClickSetSelectElementID
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  return (
    <div className="layout-text-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable defaultPosition={{ x, y }} disabled={pin}>
        <div className='layout-text-wrapper'>
          <div className={`layout-text${LogicElementSelect}${LogicElementPin}`}>
            {content}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

LayoutText.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired
};

export default LayoutText;
