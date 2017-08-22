
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import NumberInputField from '../common/NumberInputField'

const client = require('../common/client');

export default class JokeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {jokeNumber: {value: 1}, usedJokeNumbers: {list: []}};
		
		this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
		this.handleNumberChanged = this.handleNumberChanged.bind(this);
	}
	
	componentWillMount() {

	}

	handleGoButtonClick() {
		let self = this;
		
		// TODO: Check for max

		if (!this.state.usedJokeNumbers.list.some((obj) => { return obj === self.state.jokeNumber.value; })) {
			
			let data = {method: 'GET', path: '/api/jokes/' + this.state.jokeNumber.value};
			
			client(data).then((response,error) => {
				if (response) {
					alert(response.entity.joke + "\n\n" + response.entity.punchline);
					let _list = this.state.usedJokeNumbers.list.slice();
					_list.push(this.state.jokeNumber.value);
					self.setState({usedJokeNumbers: {list: _list}});
				}
				else
					alert('ERROR!: ' + error);
			});
		} else {
			alert("I've already told you that joke! Pick another one!");
		}
	}
	
	handleNumberChanged(e) {
		this.setState({jokeNumber: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				Pick a number.. I'll tell you a joke 
				<NumberInputField minValue="1" maxValue="50" onChangeHandler={this.handleNumberChanged} value={this.state.jokeNumber.value} /> 
				<button onClick={this.handleGoButtonClick}>Go!</button>
			</div>
		)
	}
}



