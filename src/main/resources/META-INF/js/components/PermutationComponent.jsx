
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TextInputField from '../common/TextInputField'

const client = require('../common/client');

export default class PermutationComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {string1: {value: ''}, string2: {value: ''}};
	}
	
	componentWillMount() {

	}

	handleGoButtonClick() {
		let self = this;
		
	}
	
	handleString1Changed(e) {
		this.setState({string1: {value: e.target.value}});
	}

	handleString2Changed(e) {
		this.setState({string2: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				Enter two strings:  
				<TextInputField onChangeHandler={this.handleString1Changed} value={this.state.string1.value} placeholder='..one' />
				<TextInputField onChangeHandler={this.handleString2Changed} value={this.state.string2.value} placeholder='..two' />
				<button onClick={this.handleGoButtonClick}>Go!</button>
			</div>
		)
	}
}


