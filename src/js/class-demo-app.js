import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	render() {
		// return React.createElement('div',null, 
		// 	React.createElement('h1',null, 'Hello World!')
		// );
		
		return <div>
			<h1>Hello World!!</h1>
			<ul>
				<li>red</li>
				<li>blue</li>
				<li>gold</li>
				<li>white</li>
				<li>yellow</li>
			</ul>
		</div>;
	}

}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));
