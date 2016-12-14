import React from 'react';


export class InputSSN {

	constructor(props) {
		super(props);

		this.state = {
			ssn: ''
		};

	}

	onChange(e) {
		this.props.onChange(e);
	}

	render() {

		return <input type="text" name=""

	}

}