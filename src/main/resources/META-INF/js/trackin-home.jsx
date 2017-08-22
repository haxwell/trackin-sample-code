
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class TrackinHome extends React.Component {
	constructor(props) {
		super(props);

	}
	
	componentWillMount() {

	}

	render() {
		return (
			<div>
				Trackin Home Rendered!
			</div>
		)
	}
}

ReactDOM.render(
		<TrackinHome />,
		document.getElementById('root-trackin-home')
);

