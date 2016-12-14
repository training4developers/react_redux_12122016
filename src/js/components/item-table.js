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

export class ItemTable extends React.PureComponent {

	props: ItemTableProps;
	state: ItemTableState;

	static propTypes = {
		cols: React.PropTypes.array,
		items: React.PropTypes.array,
	};

	render(): React.Element<any> {

		return <table>
			<thead>
				<tr>
					{this.props.cols.map(col => <th key={col.key}>{col.caption}</th>)}
				</tr>
			</thead>
			<tbody>
				{this.props.items.map(item => <tr key={item.id}>
					{this.props.cols.map(col => <td key={col.key}>{item[col.key]}</td>)}
				</tr>)}		
			</tbody>
		</table>;

	}

}