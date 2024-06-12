import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import TestComponent1 from '../TestComponent1.svelte';

describe('TestComponent1', () => {
	it('should render', () => {
		const { getByText } = render(TestComponent1);
		expect(getByText('Hello!')).toBeInTheDocument();
	});
});
