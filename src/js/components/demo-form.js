/* @flow */

import React from 'react';

import { BaseForm } from './base-form';

type DemoFormProps = Object;
type DemoFormState = {
};

export class DemoForm extends BaseForm {

	props: DemoFormProps;
	state: DemoFormState;

	static defaultState = (): DemoFormState => ({
	});

	constructor(props: DemoFormProps) {
		super(props);
		this.state = DemoForm.defaultState();
	}

	render(): React.Element<any> {

		console.log(this.state);

		return <form>
		</form>;

	}
}