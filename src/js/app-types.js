/* @flow */

import { Car } from './models/car';

import type { Store, Action } from 'redux';

export type AppState = {
	cars: Car[],
};

export type AppAction = Action & {
	car?: Car,
	cars?: Car[],
}

export type AppStore = Store<AppState, AppAction>;