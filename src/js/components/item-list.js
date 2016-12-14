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

	render(): React.Element<any> {

		// use of functions such as map and filter, and inlining those function calls into the JSX
		// is a very common approach to display lists of information

		return <ul>
			{this.props.items.map(item =>
				<li>{item}</li>
			)}
		</ul>;
	}
}