/* @flow */

import React from 'react';

import { Car } from '../models/car';

import { ToolHeader } from './tool-header';
import { ItemTable } from './item-table';
import { CarForm } from './car-form';

type CarToolProps = {
	toolCaption: string,
	cars: Car[],
};

type CarToolState = {
	cars: Car[],
};

export class CarTool extends React.Component {

	props: CarToolProps;
	state: CarToolState;

	static propTypes = {
		toolCaption: React.PropTypes.string,
		cars: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Car)),
	};

	static defaultState = (props: CarToolProps): CarToolState => ({
		cars: props.cars.concat(),
	});	

	constructor(props: CarToolProps) {
		super(props);
		this.state = CarTool.defaultState(props);
	}

	addCar = (newCar: Car) => {
		this.setState({
			cars: this.state.cars.concat(newCar),
		});
	};

	render(): React.Element<any> {

		const cols = [
			{ caption: 'Make', key: 'make' },
			{ caption: 'Model', key: 'model' },
			{ caption: 'Year', key: 'year' },
			{ caption: 'Color', key: 'color' },
			{ caption: 'Price', key: 'Price' },
		];

		return <div>
			<ToolHeader caption={this.props.toolCaption} />
			<ItemTable items={this.state.cars} cols={cols} />
			<CarForm newCarAdded={this.addCar} />
		</div>;
	}

}