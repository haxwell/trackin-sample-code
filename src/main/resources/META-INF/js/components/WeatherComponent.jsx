
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TextInputField from '../common/TextInputField'

const client = require('../common/client');

export default class WeatherComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {weatherQuery: {value: ''}};
		
		this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
		this.handleWeatherQueryChanged = this.handleWeatherQueryChanged.bind(this);
	}
	
	componentWillMount() {

	}

	

	handleGoButtonClick() {
		let toSend = {method: 'GET', path: 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.weatherQuery.value+'&APPID=35f957745a52c6259ede6ac1cee74af2'};
		
		client(toSend).then(
			(response) => {
				if (response) {
					alert("Here's the weather in " + this.state.weatherQuery.value + "\n\n" + response.entity.weather[0]["main"] + "\n" + response.entity.weather[0]["description"] + "\n\n"); 
				}
			}, 
			(err) => { 
				alert('ERROR: ' + err.entity.cod + " " + err.entity.message); 
			}
		);
	}
	
	handleWeatherQueryChanged(e) {
		this.setState({weatherQuery: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				<span>What is the weather today in: </span> 
				<TextInputField onChangeHandler={this.handleWeatherQueryChanged} value={this.state.weatherQuery.value} placeholder='Enter "city, country"' />
				<button onClick={this.handleGoButtonClick}>Go!</button>
			</div>
		)
	}
}


