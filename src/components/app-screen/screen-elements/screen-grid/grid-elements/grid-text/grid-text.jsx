import React from 'react';
import './grid-text.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function GridText(props) {
  const {
    item,
    selectStatus,
    onClickSetSelectElementID,
    handleSetNewCord
  } = props;

  const {id, x, y, pin, content, textColor} = item;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  return (
    <div className="grid-text-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{ x: Number(x), y: Number(y) }}
                 disabled={pin}
                 onStop={(event) => {handleSetNewCord(id, event, {width: 10, height: 10})}}>
        <div className={`grid-text${LogicElementSelect}${LogicElementPin}`}
             style={{color: textColor}}
        >
          {content}
        </div>
      </Draggable>
    </div>
  );
}

GridText.propTypes = {
  item: PropTypes.object.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired
};

export default GridText;
