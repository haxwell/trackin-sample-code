import React from 'react';
import TextInputField from './TextInputField'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const component = renderer.create(
		<TextInputField />
	).toJSON();

	expect(component).toMatchSnapshot();
});
