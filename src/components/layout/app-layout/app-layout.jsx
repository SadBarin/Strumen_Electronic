import React from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';

function AppLayout(props) {
  const { items } = props;

  // eslint-disable-next-line array-callback-return,consistent-return
  const layoutList = items.map((item) => {
    const {
      id, type, x, y,
    } = item;

    return (
      <div className="position-absolute" key={id}>
        <LogicGate id={id} logic={type} x={x} y={y} />
      </div>
    );
  });

  return (
    <div className="app-layout position-relative">
      {layoutList}
    </div>
  );
}

AppLayout.defaultProps = {
  statusRemove: false,
  onClickRemove: () => {},
};

AppLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  statusRemove: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  onClickRemove: PropTypes.func,
};

export default AppLayout;
