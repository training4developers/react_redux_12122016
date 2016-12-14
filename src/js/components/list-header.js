/* @flow */

import React from 'react';

type ListHeaderProps = {
	headerText: string
};

type ListHeaderState = Object;

export class ListHeader extends React.Component {

	props: ListHeaderProps;
	state: ListHeaderState;

	static propTypes = {
		headerText: React.PropTypes.string.isRequired
	};

	render() {
		return <header>
			<h1>{this.props.headerText}</h1>
		</header>;
	}
}