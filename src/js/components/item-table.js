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

export const ItemRow = props => <tr>
	{props.cols.map(col => <td key={col.key}>{props.item[col.key]}</td>)}
	<td><button type="button" onClick={() => props.deleteItem(props.item.id)}>Delete</button></td>
</tr>;

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
				{this.props.items.map(item => <ItemRow key={item.id} item={item} {...this.props} />)}		
			</tbody>
		</table>;

	}

}