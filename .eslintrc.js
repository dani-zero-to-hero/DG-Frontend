module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		ecmaFeatures: { impliedStrict: true, jsx: true },
	},
	env: { es6: true, browser: true },
	globals: {
		console: false,
		exports: false,
		global: false,
		module: false,
		require: false,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: ['babel', 'prettier', 'react-native'],
	rules: {
		semi: 1,
		'react/prop-types': 'off',
		'react-native/no-color-literals': 0,
		'react-native/no-raw-text': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				printWidth: 80,
				trailingComma: 'es5',
				semi: true,
				doubleQuote: false,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
				tabWidth: 2,
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always-and-inside-groups',
				groups: [
					'builtin',
					'external',
					'internal',
					'unknown',
					['parent', 'sibling'],
					'index',
					'object',
				],
			},
		],
	},
	overrides: [
		{
			files: ['app.config.js'],
			globals: {
				process: true,
			},
		},
	],
	settings: {
		'import/ignore': ['node_modules/react-native/index\\.js$', 'react-native'],
		react: { version: 'detect' },
	},
};
