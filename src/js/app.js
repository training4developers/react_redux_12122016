import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			newColor: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	render() {

		return <div>
			<h1>{this.props.headerText}</h1>
			<ul>
				{this.props.items.map(item =>
					<li>{item}</li>
				)}
			</ul>
			<form>
				<label htmlFor="new-color-input">New Color:</label>
				<input type="text" id="new-color-input" name="newColor"
					value={this.state.newColor} onChange={this.onChange} />
				<button>Add Color</button>
			</form>
		</div>;
	}

}

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<HelloWorld headerText='List of Colors' items={colors} />, document.querySelector('main'));



