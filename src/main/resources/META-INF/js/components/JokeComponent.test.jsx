import React from 'react';
import JokeComponent from './JokeComponent'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const component = renderer.create(
		<JokeComponent />
	).toJSON();

	expect(component).toMatchSnapshot();
});