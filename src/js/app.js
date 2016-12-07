/* @flow */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

import type { HelloWorldProps } from './types/hello-world-props';

class HelloWorld extends Component {

	props: HelloWorldProps;
	state: void;

	static defaultProps: HelloWorldProps = {
		message: 'Hello World!'
	};

	static propTypes = {
		message: PropTypes.string
	};

	render(): React.Element<any> {
		return <h1>{this.props.message}</h1>;
	}

}

ReactDOM.render(<HelloWorld message="Bonjour le monde!" />, document.querySelector('main'));
