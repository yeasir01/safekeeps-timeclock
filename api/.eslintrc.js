module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
  },
  rules: {
    semi: ['warn', 'always'],
    quotes: ['error', 'single', {'allowTemplateLiterals': true}],
  },
};
