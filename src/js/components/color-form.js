/* @flow */

import React from 'react';

import { BaseForm } from './base-form';

type ColorFormProps = {
	newColorAdded: (e: string) => void,
};

type ColorFormState = {
	newColor: string,
}

export class ColorForm extends BaseForm {

	props: ColorFormProps;
	state: ColorFormState;

	static propTypes = {
		newColorAdded: React.PropTypes.func.isRequired
	};

	static defaultState = (): ColorFormState => ({
		newColor: ''
	});

	constructor(props: ColorFormProps) {
		super(props);
		this.state = ColorForm.defaultState();
	}

	onClick = () => {
		// invoking a function passed in via props from a parent component is the correct
		// way to send data from a child component to a parent
		// components should never modified props
		this.props.newColorAdded(this.state.newColor);
		this.setState(ColorForm.defaultState());
	};

	render(): React.Element<any> {
		return <form>
			<label htmlFor="new-color-input">New Color:</label>
			<input type="text" id="new-color-input" name="newColor"
				value={this.state.newColor} onChange={this.onChange} />
			<button type="button" onClick={this.onClick}>Add Color</button>
		</form>;
	}

}