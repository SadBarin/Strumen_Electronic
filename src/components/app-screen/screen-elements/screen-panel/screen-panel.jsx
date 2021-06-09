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
      onClickSave,
      selectElement,

      addObjectGrid,

      panelStatuses,
      objectPropertyToggle,
      propertyToggle
    } = this.props;

    return (
      <div id="screen-panel">
        <IconButton icon="bi-list" active={panelVisible} onClick={() => this.handleClickButton()}/>

        <PanelList
          display={panelVisible ? '' : ' panel-hidden'}
          selectElement={selectElement}

          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickChangePin={onClickChangePin}
          onClickCloneElement={onClickCloneElement}
          onClickSave={onClickSave}

          addObjectGrid={addObjectGrid}

          panelStatuses={panelStatuses}

          objectPropertyToggle={objectPropertyToggle}
          propertyToggle={propertyToggle}
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
  selectElement: PropTypes.any.isRequired,

  onClickChangePin: PropTypes.func.isRequired,
  onClickCloneElement: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,

  addObjectGrid: PropTypes.func.isRequired,

  panelStatuses: PropTypes.object.isRequired,
  objectPropertyToggle: PropTypes.func.isRequired,
  propertyToggle: PropTypes.func.isRequired
};

export default ScreenPanel;
