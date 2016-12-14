/* @flow */

import React from 'react';

// when not specific props or state will be configured
// set them to object to avoid Flow complaints
type BaseFormProps = Object;
type BaseFormState = Object;

export class BaseForm extends React.Component {

	props: BaseFormProps;
	state: BaseFormState;

	// input event type for Flow is the SyntheticInputEvent (new as of 11/2016)
	onChange = (e: SyntheticInputEvent) => {

		console.log(e);

		let newState;

		switch (e.target.type) {
			case 'number':
			case 'range':
				newState = { [e.target.name]: parseInt(e.target.value, 10) };
				break;
			case 'checkbox':
				newState = { [e.target.name]: e.target.checked };
				break;
			default: 

				if (e.target.multiple) { 
					newState = { [e.target.name]: Array.from(e.target.options)
						.filter(option => option.selected)
						.map(option => option.value) };
				} else {
					newState = { [e.target.name]: e.target.value };
				}

				break;
		}

		this.setState(newState);
	}

}