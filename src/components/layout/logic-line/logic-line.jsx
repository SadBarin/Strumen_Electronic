import React from 'react';
import './logic-line.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicLine(props) {
  const {
    id,
    x, y, pin,
    selectStatus,
    width, height,
    turn, active,
    onClickSetSelectElementID,
    handleSetNewCord
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';
  const LogicElementActive = (active === 'true') ? ' on' : '';

  const style = {
    width: width + 'px',
    height: height + 'px',
    transform: `rotate(${turn}deg)`
  }

  return (
    <div className="logic-line-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{ x, y }} disabled={pin} onStop={(event) => {handleSetNewCord(id, event, {width, height})}}>
        <div className='logic-line-wrapper'>
          <div className={`logic-line${LogicElementSelect}${LogicElementPin}${LogicElementActive}`} style={style} title={active}/>
        </div>
      </Draggable>
    </div>
  );
}

LogicLine.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  turn: PropTypes.any.isRequired,
  active: PropTypes.string.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired
};

export default LogicLine;
