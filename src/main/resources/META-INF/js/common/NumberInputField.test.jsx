import React from 'react';
import NumberInputField from './NumberInputField'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const component = renderer.create(
		<NumberInputField minValue="1" maxValue="50" />
	).toJSON();

	expect(component).toMatchSnapshot();
});