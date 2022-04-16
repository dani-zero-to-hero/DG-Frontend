module.exports = {
  parser: 'babel-eslint',
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
    'prettier/react',
    'prettier/standard',
    'prettier/babel',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['babel', 'prettier', 'react-native'],
  rules: {
    semi: 1,
    'prettier/prettier': 'warn',
    'react/prop-types': 'off',
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
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
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    react: { version: 'detect' },
  },
};
