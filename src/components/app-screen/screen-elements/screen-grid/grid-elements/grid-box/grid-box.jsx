import React from 'react';
import './grid-box.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function GridBox(props) {
  const {
    item,
    onClickSetSelectElementID,
    getNewCord
  } = props;

  const {id, x, y, pin, width, height, backgroundColor} = item;

  const style = {
    background: backgroundColor,

    width: width + 'px',
    height: height + 'px'
  }

  return (
    <div className="grid-box-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{ x: Number(x), y: Number(y) }}
                 disabled={pin} onStop={(event) => {getNewCord(id, event, {width, height})}}>
        <div className="grid-box-wrapper">
          <div className={`grid-box`}
               style={style}/>
        </div>
      </Draggable>
    </div>
  );
}

GridBox.propTypes = {
  item: PropTypes.object.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  getNewCord: PropTypes.func.isRequired
};

export default GridBox;
