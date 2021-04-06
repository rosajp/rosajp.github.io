module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		// Make sure that plugin:prettier/recommended is the last configuration in the extends array
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks', 'eslint-plugin-html'],
	rules: {
		// Place to specify and overwrite ESLint rules
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': 'error',
		'max-len': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		// 'import/no-extraneous-dependencies': 'off',
	},
};
