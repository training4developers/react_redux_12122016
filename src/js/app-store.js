/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { carReducer } from './reducers/car-reducer';

import type { AppStore } from './app-types';

export const appStore: AppStore = createStore(carReducer, applyMiddleware(thunk));

