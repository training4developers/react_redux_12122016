/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

type ItemListItemProps = {
	item: string
};

type ItemListItemState = {
	item: string
};

class ItemListItem extends React.PureComponent {

	props: ItemListItemProps;
	state: ItemListItemState;

	static propTypes = {
		item: React.PropTypes.string
	};

	constructor(props) {
		super(props);

		console.log('constructor: ', props.item);

		this.state = {
			item: props.item
		};

	}

	render() {
		return <li>{this.props.item} | {this.state.item}</li>;
	}

}

type ItemListProps = {
	items: string[]
};

type ItemListState = {
	items: string[]
};

class ItemList extends React.PureComponent {

	props: ItemListProps;
	state: ItemListState;

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat()
		};
	}

	componentDidMount() {
		setTimeout(() => {
			console.log('timeout expired');

			//this.state.items.shift();

			this.setState({
				items: this.state.items.slice(1)
				//items: this.state.items
			});
		}, 3000);
	}

	render() {
		return <ul>
			{this.state.items.map(item => <ItemListItem key={item} item={item} />)}
		</ul>;
	}
}

ReactDOM.render(<ItemList items={['a','b','c','d']} />, document.querySelector('main'));



