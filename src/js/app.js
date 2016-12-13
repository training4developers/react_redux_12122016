/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

type ListHeaderProps = {
	headerText: string
};

class ListHeader extends React.Component {

	props: ListHeaderProps;

	render() {

		return <header>
			<h1>{this.props.headerText}</h1>
		</header>;
	}

}

ListHeader.propTypes = {
	headerText: React.PropTypes.string.isRequired
};

class ItemList extends React.Component {

	render() {
		return <ul>
			{this.props.items.map(item =>
				<li>{item}</li>
			)}
		</ul>;
	}

}

ItemList.propTypes = {
	items: React.PropTypes.array.isRequired
};

class BaseForm extends React.Component {

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

}

class ItemForm extends BaseForm {

	constructor(props) {

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
		return 	<form>
			<label htmlFor="new-color-input">New Color:</label>
			<input type="text" id="new-color-input" name="newColor"
				value={this.state.newColor} onChange={this.onChange} />
			<button type="button" onClick={this.onClick}>Add Color</button>
		</form>;
	}

}


class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat()
		};
	}

	addColor = (newColor) => {
		this.setState({
			items: this.state.items.concat(newColor),
		});
	};

	render() {
		return <div>
			<ListHeader headerText={this.props.headerText} />
			<ItemList items={this.state.items} />
			<ItemForm newColorAdded={this.addColor} />
		</div>;
	}

}

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<HelloWorld headerText='List of Colors' items={colors} />, document.querySelector('main'));



