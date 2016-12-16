/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

import { CarTool } from './components/car-tool';
import { appStore } from './app-store';

ReactDOM.render(<CarTool toolCaption='Table of Cars' store={appStore} />, document.querySelector('main'));
