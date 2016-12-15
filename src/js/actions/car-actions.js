/* @flow */

import { actionTypes } from '../action-types';
import { Car } from '../models/car';

const cars = [
	new Car({ id: 1, make: 'Ford', model: 'Fusion', year: 2013, color: 'black', price: 23000 }),
	new Car({ id: 2, make: 'Chevrolet', model: 'Malibu', year: 2011, color: 'blue', price: 33000 }),
	new Car({ id: 3, make: 'Tesla', model: 'S', year: 2015, color: 'red', price: 100000 }),
];

export const createCarsRefreshAction = () => ({ type: actionTypes.CARS_REFRESH, cars });

export const createCarsAddAction = (car: Car) => ({ type: actionTypes.CARS_ADD, car });
