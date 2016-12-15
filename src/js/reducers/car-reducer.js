/* @flow */

import { actionTypes } from '../action-types';

import type { AppState, AppAction } from '../app-types';

export const carReducer = (state: AppState = { cars: [] }, action: AppAction) => {

	switch (action.type) {
		case actionTypes.CARS_ADD:
			return Object.assign({}, state, { cars: state.cars.concat(action.car) });
		case actionTypes.CARS_REFRESH:
			return Object.assign({}, state, { cars: action.cars });
		default:
			return state;
	}

};