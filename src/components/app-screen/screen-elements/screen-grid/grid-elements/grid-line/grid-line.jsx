import React from 'react';
import './grid-line.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function GridLine(props) {
  const {
    item,
    selectStatus,
    onClickSetSelectElementID,
    handleSetNewCord
  } = props;

  const {id, x, y, pin, width, height, active, backgroundColor} = item;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';
  const LogicElementActive = (active === 'true') ? ' on' : '';

  const style = {
    background: backgroundColor,

    width: width + 'px',
    height: height + 'px'
  }

  return (
    <div className="grid-line-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{ x: Number(x), y: Number(y) }}
                 disabled={pin} onStop={(event) => {handleSetNewCord(id, event, {width, height})}}>
        <div className="grid-line-wrapper">
          <div className={`grid-line${LogicElementSelect}${LogicElementPin}${LogicElementActive}`}
               style={style}
               title={active}/>
        </div>
      </Draggable>
    </div>
  );
}

GridLine.propTypes = {
  item: PropTypes.object.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired
};

export default GridLine;
