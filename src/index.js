import React from 'react';
import ReactDOM from 'react-dom';
import AppScreen from './components/app-screen';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();

import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.render(
  <AppScreen />,
  document.getElementById('app'),
);
