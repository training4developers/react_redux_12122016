/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

import { Car } from './models/car';

//import { ColorTool } from './components/color-tool';
import { CarTool } from './components/car-tool';
// import { DemoForm } from './components/demo-form';

// const colors = ['red','blue','gold','white','yellow'];
const cars = [
	new Car({ id: 1, make: 'Ford', model: 'Fusion', year: 2013, color: 'black', price: 23000 }),
	new Car({ id: 2, make: 'Chevrolet', model: 'Malibu', year: 2011, color: 'blue', price: 33000 }),
	new Car({ id: 3, make: 'Tesla', model: 'S', year: 2015, color: 'red', price: 100000 }),
];

//ReactDOM.render(<ColorTool toolCaption='List of Colors' colors={colors} />, document.querySelector('main'));
//ReactDOM.render(<CarTool toolCaption='Table of Cars' cars={cars} />, document.querySelector('main'));
//ReactDOM.render(<DemoForm />, document.querySelector('main'));



