import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	render() {

		// return React.createElement('div',null, 
		// 	React.createElement('h1',null, 'Hello World!')
		// );

		console.log(this.props);

		// function myForEach(items, fn) {
		// 	for (var x=0; x<items.length; x++) {
		// 		fn(items[x]);
		// 	}
		// }

		// const items = [];

		// this.props.items.forEach(function(item) {
		// 	items.push(<li>{item}</li>);
		// });

		//this.props.headerText = 'List of Cars';

		// never ever...
		//this.props.items.push('new item');
		//this.props.something.something.someting = 2;

		return <div>
			<h1>{this.props.headerText}</h1>
			<ul>
				{this.props.items.map(item =>
					<li>{item}</li>
				)}
			</ul>
		</div>;
	}

}

const colors = ['red','blue','gold','white','yellow'];

ReactDOM.render(<HelloWorld headerText='List of Colors' items={colors} />, document.querySelector('main'));
