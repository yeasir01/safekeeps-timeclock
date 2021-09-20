module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['warn', 'always'],
    qoutes: ['warn', 'single'],
    indent: ["warn", "4"]
  },
};
