import React from 'react';
import './popup-info.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupInfo({ hidden, closePopup }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Информация о логике">
      <div>
        <p><b>OR</b> - логическое ИЛИ</p>
        <table>
          <tbody>
            <tr>
              <td colSpan="2"><b>Input</b></td>
              <td><b>Output</b>
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>B</td>
              <td align="center">A OR B</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td align="center">1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td align="center">1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td align="center">1</td>
            </tr>
          </tbody>
        </table>

        <p><b>AND</b> - логическое И</p>
        <table>
          <tbody>
            <tr>
              <td colSpan="2"><b>Input</b></td>
              <td><b>Output</b>
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>B</td>
              <td align="center">A AND B</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td align="center">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PopupWrapper>
  );
}

PopupInfo.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default PopupInfo;
