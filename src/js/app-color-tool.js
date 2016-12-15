/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

import { ColorTool } from './components/color-tool';

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<ColorTool toolCaption='List of Colors' colors={colors} />, document.querySelector('main'));



