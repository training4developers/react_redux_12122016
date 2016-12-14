/* @flow */

import React from 'react';

export const ToolHeader = props => <header>
	<h1>{props.caption}</h1>
</header>;

ToolHeader.propTypes = {
	caption: React.PropTypes.string
};
