
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
				<TextInputField placeholder='String 1' />
				<TextInputField placeholder='String 2' />
				<button onClick={this.handlePermutationButtonClick}>Go!</button>
			</div>
		)
	}
}


