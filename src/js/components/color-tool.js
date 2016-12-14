/* @flow */

import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

type ColorToolProps = {
	toolCaption: string,
	colors: string[],
};

type ColorToolState = {
	colors: string[],
};

export class ColorTool extends React.Component {

	props: ColorToolProps;
	state: ColorToolState;

	static propTypes = {
		toolCaption: React.PropTypes.string,
		colors: React.PropTypes.arrayOf(React.PropTypes.string),
	};

	static defaultState = (props: ColorToolProps): ColorToolState => ({
		colors: props.colors.concat(),
	});

	constructor(props: ColorToolProps) {
		super(props);
		this.state = ColorTool.defaultState(props);
	}

	addColor = (newColor: string) => {
		this.setState({
			colors: this.state.colors.concat(newColor),
		});
	};

	render(): React.Element<any> {
		return <div>
			<ToolHeader caption={this.props.toolCaption} />
			<ItemList items={this.state.colors} />
			<ColorForm newColorAdded={this.addColor} />
		</div>;
	}

}