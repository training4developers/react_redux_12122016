/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import keyMirror from 'key-mirror';
import { createStore } from 'redux';

import { BaseForm } from './components/base-form';

const actionTypes = keyMirror({
	INCREMENT: null,
	DECREMENT: null
});

const createIncrementAction = amountToChange => ({
	type: actionTypes.INCREMENT,
	value: amountToChange
});

const createDecrementAction = amountToChange => ({
	type: actionTypes.DECREMENT,
	value: amountToChange
});

const reducer = (state = 0, action) => {

	console.log(state);

	switch (action.type) {
		case actionTypes.INCREMENT:
			return state + action.value; 
		case actionTypes.DECREMENT:
			return state - action.value; 
		default:
			return state; 
	}

};

const store = createStore(reducer);

class Calculator extends BaseForm {

	unsubscribe: () => void;

	constructor(props) {
		super(props);

		this.state = {
			currentValue: 0,
			amountToChange: 1
		};
	}

	componentDidMount() {
		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				currentValue: this.props.store.getState()
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	incrementValue = () => {
		this.props.store.dispatch(createIncrementAction(this.state.amountToChange));
	}

	decrementValue = () => {
		this.props.store.dispatch(createDecrementAction(this.state.amountToChange));
	}

	render() {
		return <form>
			<span>{this.state.currentValue}</span><br />
			<button type="button" onClick={this.incrementValue}>Increment</button>
			<button type="button" onClick={this.decrementValue}>Decrement</button>
			<input type="number" name="amountToChange" value={this.state.amountToChange}
				onChange={this.onChange} />
		</form>;
	}

}

ReactDOM.render(<Calculator store={store} />, document.querySelector('main'));