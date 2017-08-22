const isPermutation = require('./isPermutation');

test('dog and god return true', () => {
	expect(isPermutation('dog', 'god')).toBe(true);
});