import React from 'react';

export default class NumberInputField extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<input type="number" min={this.props.minValue} max={this.props.maxValue} value={this.props.value} onChange={this.props.onChangeHandler} placeholder={this.props.placeholder} />
		);
	}
}

