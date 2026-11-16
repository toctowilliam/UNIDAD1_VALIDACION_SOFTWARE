export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
    },
    rules: {
      "no-var": "error",
      eqeqeq: "error",
      "no-unused-vars": "error",
      curly: "error",
    },
  },
];

