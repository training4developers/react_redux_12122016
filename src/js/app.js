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

		//this.props.headerText = 2;

		return <header>
			<h1>{this.props.headerText}!!!</h1>
		</header>;
	}

}

ListHeader.propTypes = {
	headerText: React.PropTypes.string.isRequired
};

class HelloWorld extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			newColor: '',
			items: props.items.concat()
		};

		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	onClick() {

		this.setState({
			items: this.state.items.concat(this.state.newColor),
			newColor: ''
		});

	}

	render() {

		return <div>
			<ListHeader headerText={this.props.headerText} />
			<ul>
				{this.state.items.map(item =>
					<li>{item}</li>
				)}
			</ul>
			<form>
				<label htmlFor="new-color-input">New Color:</label>
				<input type="text" id="new-color-input" name="newColor"
					value={this.state.newColor} onChange={this.onChange} />
				<button type="button" onClick={this.onClick}>Add Color</button>
			</form>
		</div>;
	}

}

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<HelloWorld headerText='List of Colors' items={colors} />, document.querySelector('main'));



