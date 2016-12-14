import React from 'react';


export class InputSSN extends React.Component {

	static propTypes = {
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		name: React.PropTypes.string
	};

	onChange = (e) => {
		e.target.value = e.target.value.replace('-', '');
		e.target.value = e.target.value.replace('-', '');
		e.target.value = e.target.value.slice(0, 9);
		this.props.onChange(e);
	}

	render() {

		let ssn = this.props.value;

		if (ssn.length > 2) {
			ssn = ssn.slice(0,3) + '-' + ssn.slice(3);
		}

		if (ssn.length > 5) {
			ssn = ssn.slice(0,6) + '-' + ssn.slice(6);
		}		

		return <input type="text" name={this.props.name} value={ssn} onChange={this.onChange} />;

	}

}