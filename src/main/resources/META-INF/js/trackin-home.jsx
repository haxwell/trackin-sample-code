
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TextInputField from './common/TextInputField'
import NumberInputField from './common/NumberInputField'

class TrackinHome extends React.Component {
	constructor(props) {
		super(props);

	}
	
	componentWillMount() {

	}

	render() {
		return (
			<div>
				<div>
					What is the weather today in 
					<TextInputField placeholder='Enter "city, country"' />
					<button onClick={this.handleWeathButtonClick}>Go!</button>
				</div>
				<br/>
				<div>
					Pick a number.. I'll tell you a joke 
					<NumberInputField />
					<button onClick={this.handleJokeButtonClick}>Go!</button>
				</div>
				<br/>
				<div>
					Enter two strings:  
					<TextInputField placeholder='String 1' />
					<TextInputField placeholder='String 2' />
					<button onClick={this.handlePermutationButtonClick}>Go!</button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
		<TrackinHome />,
		document.getElementById('root-trackin-home')
);

