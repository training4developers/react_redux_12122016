/* @flow */

import { createStore } from 'redux';
import { carReducer } from './reducers/car-reducer';

import type { AppStore } from './app-types';

export const appStore: AppStore = createStore(carReducer);

