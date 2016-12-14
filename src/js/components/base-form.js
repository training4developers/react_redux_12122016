/* @flow */

import React from 'react';

type BaseFormProps = Object;
type BaseFormState = Object;

export class BaseForm extends React.Component {

	props: BaseFormProps;
	state: BaseFormState;

	onChange = (e: SyntheticInputEvent) => {
		this.setState({
			[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value
		});
	}

}