import React from 'react';

export default class TextInputField extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<input type="text" value={this.props.value} onChange={this.props.onChangeHandler} placeholder={this.props.placeholder} />
		);
	}
}

