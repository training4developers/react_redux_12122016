/* @flow */

import React from 'react';

type ToolHeaderProps = {
	caption: string,
};

type ToolHeaderState = Object;

export class ToolHeader extends React.Component {

	props: ToolHeaderProps;
	state: ToolHeaderState;

	static propTypes = {
		caption: React.PropTypes.string.isRequired
	};

	render(): React.Element<any> {
		return <header>
			<h1>{this.props.caption}</h1>
		</header>;
	}
}