/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

import { ColorTool } from './components/color-tool';

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<ColorTool headerText='List of Colors' items={colors} />, document.querySelector('main'));



