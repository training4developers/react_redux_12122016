import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import 'bootstrap-loader';
import '../css/styles.scss';

// function reducer(state = { status: 'normal', data: 0 }, action) {

// 	switch (action.type) {
// 		case 'UPDATE_STATUS':
// 			return Object.assign({}, state, { status: action.newStatus });
// 		case 'UPDATE_DATA':
// 			return Object.assign({}, state, { data: action.newData });
// 		default:
// 			return state;
// 	}
// }

const data = (state = 0, action) => {
	switch (action.type) {
		case 'UPDATE_DATA':
			return action.newData;
		default:
			return state;
	}
};

const status = (state = 'normal', action) => {
	switch (action.type) {
		case 'UPDATE_STATUS':
			return action.newStatus;
		default:
			return state;
	}
};

const store = createStore(combineReducers({ status, data }));

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'UPDATE_STATUS', newStatus: 'loading' });
store.dispatch({ type: 'UPDATE_STATUS', newStatus: 'processing' });
store.dispatch({ type: 'UPDATE_DATA', newData: 20 });
store.dispatch({ type: 'UPDATE_STATUS', newStatus: 'done' });
store.dispatch({ type: 'UPDATE_STATUS', newStatus: 'exiting' });
