
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import WeatherComponent from './components/WeatherComponent'
import JokeComponent from './components/JokeComponent'
import PermutationComponent from './components/PermutationComponent'

import NumberInputField from './common/NumberInputField'

const client = require('./common/client');

class TrackinHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {weatherQuery: {value: ''}};
	}
	
	componentWillMount() {

	}

	handleWeatherButtonClick() {
		let self = this;
		
		if (this.state.wineAttributeName.value && this.state.wineAttributeName.value.length > 0) {
			let obj = {};
			
			obj.name = this.state.wineAttributeName.value;
			let toSend = {method: 'POST', path: '/api/wine-attribute', entity: JSON.stringify(obj)};
			
			client(toSend).then((response,error) => {
				if (response) {
					alert('Saved: ' + JSON.stringify(obj));
					
					self.setState({wineAttributeName: {value: ''}});
				}
				else
					alert('ERROR!: ' + JSON.stringify(obj));
			});
		}
	}
	
	handleResetButtonClick() {
		this.setState({wineAttributeName: {value: ''}});
	};
	
	handleNameChanged(e) {
		this.setState({wineAttributeName: {value: e.target.value}});
	}

	render() {
		return (
			<div>
				<WeatherComponent />
				<JokeComponent />
				<PermutationComponent />
			</div>
		)
	}
}

ReactDOM.render(
		<TrackinHome />,
		document.getElementById('root-trackin-home')
);

