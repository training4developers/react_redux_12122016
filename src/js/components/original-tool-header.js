/* @flow */

import React from 'react';

// observe the trailing comma after string, this is an ES2017 features
// the purpose of the feature to prevent changes to source code which
// show up in source review which really have nothing to do with the change
// itself
type ToolHeaderProps = {
	caption: string,
};

type ToolHeaderState = Object;

export class ToolHeader extends React.PureComponent {

	props: ToolHeaderProps;
	state: ToolHeaderState;

	static propTypes = {
		caption: React.PropTypes.string.isRequired
	};

	// shouldComponentUpdate(nextProps: ToolHeaderProps) {
	// 	console.log(this.props.caption, nextProps.caption);
	// 	return this.props.caption !== nextProps.caption;
	// }

	render(): React.Element<any> {

		console.log('tool header rendering');

		return <header>
			<h1>{this.props.caption}</h1>
		</header>;
	}
}