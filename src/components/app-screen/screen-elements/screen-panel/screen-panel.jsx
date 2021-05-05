import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './screen-panel.css';

import PanelList from './panel-elements/panel-list';
import IconButton from '../button-icon';

class ScreenPanel extends Component {
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
      onClickHiddenDevStatus,
      onClickToggleHiddenListAdd,
      onClickSave,

      onClickToggleHiddenPopupInfo,
      onClickToggleHiddenPopupGate,
      onClickToggleHiddenPopupLine,
      onClickToggleHiddenPopupText,
      onClickToggleHiddenPopupUpload,

      onClickAddGate,
      onClickAddLine,
      onClickAddText,

      hiddenListAdd,
      hiddenListGate,
      hiddenListLine,
      hiddenListText
    } = this.props;

    return (
      <div id="screen-panel">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()}/>

        <PanelList
          display={panelVisible ? '' : ' panel-hidden'}

          onClickToggleHiddenListAdd={onClickToggleHiddenListAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickChangePin={onClickChangePin}
          onClickCloneElement={onClickCloneElement}
          onClickHiddenDevStatus={onClickHiddenDevStatus}
          onClickSave={onClickSave}

          onClickToggleHiddenPopupInfo={onClickToggleHiddenPopupInfo}
          onClickToggleHiddenPopupGate={onClickToggleHiddenPopupGate}
          onClickToggleHiddenPopupLine={onClickToggleHiddenPopupLine}
          onClickToggleHiddenPopupText={onClickToggleHiddenPopupText}
          onClickToggleHiddenPopupUpload={onClickToggleHiddenPopupUpload}

          onClickAddGate={onClickAddGate}
          onClickAddLine={onClickAddLine}
          onClickAddText={onClickAddText}

          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
          hiddenListText={hiddenListText}
        />
      </div>
    );
  }
}

ScreenPanel.defaultProps = {
  selectElementID: 0,
};

ScreenPanel.propTypes = {
  selectElementID: PropTypes.number,

  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClickCloneElement: PropTypes.func.isRequired,
  onClickHiddenDevStatus: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,

  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGate: PropTypes.func.isRequired,
  onClickToggleHiddenPopupLine: PropTypes.func.isRequired,
  onClickToggleHiddenPopupText: PropTypes.func.isRequired,
  onClickToggleHiddenPopupUpload: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func.isRequired,
  onClickAddLine: PropTypes.func.isRequired,
  onClickAddText: PropTypes.func.isRequired,

  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired,
  hiddenListLine: PropTypes.bool.isRequired,
  hiddenListText: PropTypes.bool.isRequired,
};

export default ScreenPanel;
