module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    quotes: "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    // semi: "off",
  },
};
