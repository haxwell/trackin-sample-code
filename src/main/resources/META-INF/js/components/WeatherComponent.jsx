
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TextInputField from '../common/TextInputField'

const client = require('../common/client');

export default class WeatherComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {weatherQuery: {value: ''}};
	}
	
	componentWillMount() {

	}

	handleGoButtonClick() {
		let obj = {};
		
		obj.name = this.state.wineAttributeName.value;
		let toSend = {method: 'GET', path: 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.weatherQuery.value+'&APPID=35f957745a52c6259ede6ac1cee74af2'};
		
		client(toSend).then((response,error) => {
			if (response) {
				alert('Saved: ' + JSON.stringify(obj));
				
				self.setState({wineAttributeName: {value: ''}});
			}
			else
				alert('ERROR!: ' + JSON.stringify(obj));
		});
	}
	
	handleWeatherQueryChanged(e) {
		this.setState({jokeNumber: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				What is the weather today in
				<TextInputField onChangeHandler={this.handleWeatherQueryChanged} value={this.state.weatherQuery.value} placeholder='Enter "city, country"' />
				<button onClick={this.handleGoButtonClick}>Go!</button>
			</div>
		)
	}
}


