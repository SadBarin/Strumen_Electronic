import React, {Component} from 'react';
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
    const {panelVisible} = this.state;

    this.setState({
      panelVisible: !panelVisible,
    });
  }

  render() {
    const {panelVisible} = this.state;
    const {
      onClickChangeRemoveStatus,
      onClickChangePin,
      onClickCloneElement,
      onClockHiddenDevStatus,
      onClickToggleHiddenListAdd,

      onClickToggleHiddenPopupInfo,
      onClickToggleHiddenPopupGate,
      onClickToggleHiddenPopupLine,

      onClickAddGate,
      onClickAddLine,

      hiddenListAdd,
      hiddenListGate,
      hiddenListLine
    } = this.props;

    return (
      <div className="panel">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()}/>

        <PanelList
          display={panelVisible ? '' : ' panel-hidden'}

          onClickToggleHiddenListAdd={onClickToggleHiddenListAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickChangePin={onClickChangePin}
          onClickCloneElement={onClickCloneElement}
          onClockHiddenDevStatus={onClockHiddenDevStatus}

          onClickToggleHiddenPopupInfo={onClickToggleHiddenPopupInfo}
          onClickToggleHiddenPopupGate={onClickToggleHiddenPopupGate}
          onClickToggleHiddenPopupLine={onClickToggleHiddenPopupLine}

          onClickAddGate={onClickAddGate}
          onClickAddLine={onClickAddLine}

          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
        />
      </div>
    );
  }
}

AppPanel.defaultProps = {
  selectElementID: 0,
};

AppPanel.propTypes = {
  selectElementID: PropTypes.number,

  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClickCloneElement: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired,

  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGate: PropTypes.func.isRequired,
  onClickToggleHiddenPopupLine: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func.isRequired,
  onClickAddLine: PropTypes.func.isRequired,

  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired,
  hiddenListLine: PropTypes.bool.isRequired
};

export default AppPanel;
