import React from 'react';
import WeatherComponent from './WeatherComponent'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const component = renderer.create(
		<WeatherComponent />
	).toJSON();

	expect(component).toMatchSnapshot();
});