/* @flow */

import React from 'react';

type TableColumnConfig = {
	caption: string,
	key: string,
};

type ItemTableProps = {
	cols: TableColumnConfig[],
	items: Object[],
};

type ItemTableState = Object;

export class ItemTable extends React.Component {

	props: ItemTableProps;
	state: ItemTableState;

	static propTypes = {
		cols: React.PropTypes.array,
		items: React.PropTypes.array,
	};

	render() {

		return <table>
			<thead>
				<tr>
					{this.props.cols.map(col => <th>{col.caption}</th>)}
				</tr>
			</thead>
			<tbody>
				{this.props.items.map(item => <tr>
					{this.props.cols.map(col => <td>{item[col.key]}</td>)}
				</tr>)}		
			</tbody>
		</table>;

	}

}