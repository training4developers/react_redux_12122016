/* @flow */

import React from 'react';

type ItemListProps = {
	items: string[]
};

type ItemListState = Object;

export class ItemList extends React.Component {

	props: ItemListProps;
	state: ItemListState;

	propTypes = {
		items: React.PropTypes.array.isRequired
	}

	constructor(props: ItemListProps) {
		super(props);
	}

	render() {
		return <ul>
			{this.props.items.map(item =>
				<li>{item}</li>
			)}
		</ul>;
	}
}