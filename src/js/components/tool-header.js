/* @flow */

import React from 'react';

type ToolHeaderProps = {
	caption: string,
};

export const ToolHeader = (props: ToolHeaderProps) => <header>
	<h1>{props.caption}</h1>
</header>;

ToolHeader.propTypes = {
	caption: React.PropTypes.string
};
