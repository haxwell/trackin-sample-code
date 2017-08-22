
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import NumberInputField from '../common/NumberInputField'

const client = require('../common/client');

export default class JokeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {jokeNumber: {value: ''}};
	}
	
	componentWillMount() {

	}

	handleGoButtonClick() {
		let self = this;
		
	}
	
	handleNumberChanged(e) {
		this.setState({jokeNumber: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				Pick a number.. I'll tell you a joke 
				<NumberInputField />
				<button onClick={this.handleJokeButtonClick}>Go!</button>
			</div>
		)
	}
}



