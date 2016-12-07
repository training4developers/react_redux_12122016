/* @flow */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

interface HelloWorldDefaultProps {
	message: string
}

interface HelloWorldProps {
	message: string
}

class HelloWorld extends Component<HelloWorldDefaultProps,HelloWorldProps,void> {

	static defaultProps = {
		message: 'Hello World!'
	};

	static propTypes = {
		message: PropTypes.string
	};

	render(): React.Element<any> {
		return <h1>{this.props.message}</h1>;
	}

}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));