import { createStore } from 'redux';

const reducer = (state = 0, action) => {

	//console.log('state', state);
	//console.log('action', action);

	switch (action.type) {
		case 'INCREMENT':
			return state + action.value; // producing a new state
		case 'DECREMENT':
			return state - action.value; // producing a new state
		default:
			return state; // producing a new state
	}

};

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT', value: 1 });
store.dispatch({ type: 'DECREMENT', value: 2 });
store.dispatch({ type: 'INCREMENT', value: 3 });
store.dispatch({ type: 'DECREMENT', value: 4 });
store.dispatch({ type: 'INCREMENT', value: 5 });




// console.log([
// 	{ type: 'INCREMENT', value: 1 }, // action
// 	{ type: 'DECREMENT', value: 2 }, // action
// 	{ type: 'INCREMENT', value: 3 }, // action
// 	{ type: 'DECREMENT', value: 4 }, // action
// 	{ type: 'INCREMENT', value: 5 }, // action
// ].reduce( (state, action) => {

// 	console.log('state', state);
// 	console.log('action', action);

// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + action.value; // producing a new state
// 		case 'DECREMENT':
// 			return state - action.value; // producing a new state
// 		default:
// 			return state; // producing a new state
// 	}

// }, 0));




