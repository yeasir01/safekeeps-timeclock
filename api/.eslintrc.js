module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
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
