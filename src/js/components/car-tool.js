/* @flow */

import React from 'react';

import { Car } from '../models/car';

import { ToolHeader } from './tool-header';
import { ItemTable } from './item-table';
import { CarForm } from './car-form';

import { createCarsRefreshAction, createCarsAddAction } from '../actions/car-actions';

import type { AppStore } from '../app-types';

type CarToolProps = {
	toolCaption: string,
	store: AppStore,
};

type CarToolState = {
	cars: Car[],
};

// all React components inherit from React.Component or React.PureComponent
export class CarTool extends React.Component {

	// only here for Flow
	props: CarToolProps;
	state: CarToolState;
	unsubscribe: () => void;

	static propTypes = {
		toolCaption: React.PropTypes.string,
		// cannot directly reference the class when desiring an array of classes
		// class must be passed in via the instanceOf function
		store: React.PropTypes.shape({
			subscribe: React.PropTypes.func,
			dispatch: React.PropTypes.func
		}),
	};

	// helper function to initialize state based upon props or simply default values
	static defaultState = (): CarToolState => ({
		cars: [],
	});	

	constructor(props: CarToolProps) {
		super(props);
		this.state = CarTool.defaultState();
	}

	componentDidMount() {
		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				cars: this.props.store.getState().cars
			});
		});

		this.props.store.dispatch(createCarsRefreshAction());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	addCar = (newCar: Car) => {
		this.props.store.dispatch(createCarsAddAction(newCar));
	};

	// with the later versions of Flow and React, this is the return type
	// for render
	render(): React.Element<any> {

		const cols = [
			{ caption: 'Make', key: 'make' },
			{ caption: 'Model', key: 'model' },
			{ caption: 'Year', key: 'year' },
			{ caption: 'Color', key: 'color' },
			{ caption: 'Price', key: 'price' },
		];

		return <div>
			<ToolHeader caption={this.props.toolCaption} />
			<ItemTable items={this.state.cars} cols={cols} />
			<CarForm newCarAdded={this.addCar} />
		</div>;
	}

}