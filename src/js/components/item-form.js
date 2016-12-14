/* @flow */

import React from 'react';

import { BaseForm } from './base-form';

type ItemFormProps = {
	newColorAdded: (e: string) => void;
};

type ItemFormState = {
	newColor: string;
}

export class ItemForm extends BaseForm {

	props: ItemFormProps;
	state: ItemFormState;

	constructor(props: ItemFormProps) {

		super(props);

		this.state = {
			newColor: ''
		};
	}

	static propTypes = {
		newColorAdded: React.PropTypes.func.isRequired
	};

	onClick = () => {

		this.props.newColorAdded(this.state.newColor);

		this.setState({
			newColor: ''
		});
	};

	render() {
		return <form>
			<label htmlFor="new-color-input">New Color:</label>
			<input type="text" id="new-color-input" name="newColor"
				value={this.state.newColor} onChange={this.onChange} />
			<button type="button" onClick={this.onClick}>Add Color</button>
		</form>;
	}

}