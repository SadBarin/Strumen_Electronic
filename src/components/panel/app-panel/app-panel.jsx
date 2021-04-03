import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-panel.css';

import PanelList from '../panel-list';
import IconButton from '../../button-icon';

class AppPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelVisible: true,
    };
  }

  handleClickButton() {
    const { panelVisible } = this.state;

    this.setState({
      panelVisible: !panelVisible,
    });
  }

  render() {
    const { panelVisible } = this.state;
    const { activeRemove, onClickChangeRemoveStatus, onClickAdd } = this.props;

    return (
      <div className="p-2 panel position-fixed">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()} />

        <PanelList
          activeRemove={activeRemove}
          onClickAdd={onClickAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          display={panelVisible ? '' : ' panel-hidden'}
        />
      </div>
    );
  }
}

AppPanel.defaultProps = {
  activeRemove: false,
  onClickChangeRemoveStatus: () => {},
  onClickAdd: () => {},
};

AppPanel.propTypes = {
  activeRemove: PropTypes.bool,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickAdd: PropTypes.func,
};

export default AppPanel;
