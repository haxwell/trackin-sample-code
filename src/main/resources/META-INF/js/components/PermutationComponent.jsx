
import React from 'react';
import ReactDOM from 'react-dom';

import TextInputField from '../common/TextInputField'

const isPermutation = require('../common/isPermutation');

export default class PermutationComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {string1: {value: ''}, string2: {value: ''}};
		
		this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
		this.handleString1Changed = this.handleString1Changed.bind(this);
		this.handleString2Changed = this.handleString2Changed.bind(this);
	}
	
	handleGoButtonClick() {
		if (isPermutation(this.state.string1.value, this.state.string2.value))
			alert("These strings are permutations of each other.");
		else 
			alert("These strings are NOT permutations of each other.");
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


