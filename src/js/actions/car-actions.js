/* @flow */

import { actionTypes } from '../action-types';
import { Car } from '../models/car';

export const createCarsRefreshRequestAction = () =>
({ type: actionTypes.CARS_REFRESH_REQUEST, cars: [] });

export const createCarAddRequestAction = (car: Car) =>
	({ type: actionTypes.CAR_ADD_REQUEST, car });

export const createCarDeleteRequestAction = (id: number) =>
	({ type: actionTypes.CAR_ADD_REQUEST, id });

export const createCarsRefreshAction = (cars: Car[]) =>
	({ type: actionTypes.CARS_REFRESH, cars });


export const refreshCars = () => {

	return dispatch => {

		dispatch(createCarsRefreshRequestAction());

		fetch('http://localhost:3010/cars')
			.then(res => res.json())
			.then(cars => dispatch(createCarsRefreshAction(cars)));

	};

};

export const addCar = (car: Car) => {

	return dispatch => {

		dispatch(createCarAddRequestAction(car));

		fetch('http://localhost:3010/cars', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			mode: 'cors',
			body: JSON.stringify(car)
		})
			.then(() => fetch('http://localhost:3010/cars'))
			.then(res => res.json())
			.then(cars => dispatch(createCarsRefreshAction(cars)));

	};

};

export const deleteCar = (id: number) => {

	return dispatch => {

		dispatch(createCarDeleteRequestAction(id));

		fetch(`http://localhost:3010/cars/${encodeURIComponent(id.toString())}` , {
			method: 'DELETE'
		})
			.then(() => fetch('http://localhost:3010/cars'))
			.then(res => res.json())
			.then(cars => dispatch(createCarsRefreshAction(cars)));

	};

};