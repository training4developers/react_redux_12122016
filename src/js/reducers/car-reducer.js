/* @flow */

import { actionTypes } from '../action-types';

import type { AppState, AppAction } from '../app-types';

export const carReducer = (state: AppState = { cars: [] }, action: AppAction) => {

	switch (action.type) {
		case actionTypes.CARS_REFRESH_REQUEST:
			return Object.assign({}, state, { cars: action.cars });
		case actionTypes.CAR_ADD_REQUEST:
			return state;
		case actionTypes.CARS_REFRESH:
			return Object.assign({}, state, { cars: action.cars });
		default:
			return state;
	}

};