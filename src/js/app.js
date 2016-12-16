/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { refreshCars, addCar, deleteCar } from './actions/car-actions';

import 'bootstrap-loader';
import '../css/styles.scss';

import { CarTool } from './components/car-tool';
import { appStore } from './app-store';

const mapStateToProps = ({ cars }) => ({ cars });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ refreshCars, addCar, deleteCar }, dispatch);

const CarToolContainer = connect(mapStateToProps, mapDispatchToProps)(CarTool);

ReactDOM.render(<CarToolContainer toolCaption='Table of Cars' store={appStore} />,
	document.querySelector('main'));
