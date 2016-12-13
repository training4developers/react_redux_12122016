import React from 'react';

type ListHeaderProps = {
	headerText: string
};

export class ListHeader extends React.Component {

	props: ListHeaderProps;

	static propTypes = {
		headerText: React.PropTypes.string.isRequired
	};

	render() {
		return <header>
			<h1>{this.props.headerText}</h1>
		</header>;
	}

}

