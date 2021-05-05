import React from 'react';
import './layout-text.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LayoutText(props) {
  const {
    id,
    x, y, pin,
    content,
    turn,
    selectStatus,
    onClickSetSelectElementID,
    handleSetNewCord
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  return (
    <div className="layout-text-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{ x, y }} disabled={pin} onStop={(event) => {handleSetNewCord(id, event, {width: 10, height: 10})}}>
        <div className='layout-text-wrapper'>
          <div className={`layout-text${LogicElementSelect}${LogicElementPin}`} style={{transform: `rotate(${turn}deg)`}}>
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
  turn: PropTypes.any.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired
};

export default LayoutText;
