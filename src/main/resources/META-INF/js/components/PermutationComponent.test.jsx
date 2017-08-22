import React from 'react';
import PermutationComponent from './PermutationComponent'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const component = renderer.create(
		<PermutationComponent />
	).toJSON();

	expect(component).toMatchSnapshot();
});