/* @flow */

import React from 'react';

import { ListHeader } from './list-header';
import { ItemList } from './item-list';
import { ItemForm } from './item-form';

type ColorToolProps = {
	items: string[],
	headerText: string
};

type ColorToolState = {
	items: string[]
};

export class ColorTool extends React.Component {

	props: ColorToolProps;
	state: ColorToolState;

	static propTypes = {
		items: React.PropTypes.array,
		headerText: React.PropTypes.string
	};

	constructor(props: ColorToolProps) {
		super(props);
		this.state = {
			items: props.items.concat()
		};
	}

	addColor = (newColor: string) => {
		this.setState({
			items: this.state.items.concat(newColor),
		});
	};

	render(): React.Element<any> {
		return <div>
			<ListHeader headerText={this.props.headerText} />
			<ItemList items={this.state.items} />
			<ItemForm newColorAdded={this.addColor} />
		</div>;
	}

}