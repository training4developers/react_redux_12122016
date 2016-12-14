/* @flow */

import React from 'react';

import { Car } from '../models/car';
import { BaseForm } from './base-form';

type CarFormProps = {
	newCarAdded: (e: Car) => void,
};

type CarFormState = {
	make: string,
	model: string,
	year: number,
	color: string,
	price: number
}

export class CarForm extends BaseForm {

	props: CarFormProps;
	state: CarFormState;

	static propTypes = {
		newCarAdded: React.PropTypes.func.isRequired
	};

	static defaultState = (): CarFormState => ({
		make: '',
		model: '',
		year: 2016,
		color: '',
		price: 0,
	});

	constructor(props: CarFormProps) {
		super(props);
		this.state = CarForm.defaultState();
	}

	onClick = () => {
		this.props.newCarAdded(new Car(this.state));
		this.setState(CarForm.defaultState());
	};

	render() {
		return <form>
			<fieldset>
				<legend>New Car</legend>
				<div>
					<label htmlFor="new-make-input">Make:</label>
					<input type="text" id="new-make-input" name="make"
						value={this.state.make} onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="new-model-input">Model:</label>
					<input type="text" id="new-model-input" name="model"
						value={this.state.model} onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="new-year-input">Year:</label>
					<input type="number" id="new-year-input" name="year"
						value={this.state.year} onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="new-color-input">Color:</label>
					<input type="text" id="new-color-input" name="color"
						value={this.state.color} onChange={this.onChange} />
				</div>
				<div>
					<label htmlFor="new-price-input">Price:</label>
					<input type="text" id="new-price-input" name="price"
						value={this.state.price} onChange={this.onChange} />
				</div>
				<button type="button" onClick={this.onClick}>Add Car</button>
			</fieldset>
		</form>;
	}

}