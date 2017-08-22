
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TextInputField from '../common/TextInputField'

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
				What is the weather today in
				<TextInputField onChangeHandler={this.handleNameChanged} value={this.state.weatherQuery.value} placeholder='Enter "city, country"' />
				<button onClick={this.handleWeathButtonClick}>Go!</button>
			</div>
		)
	}
}


