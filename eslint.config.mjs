import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        appendToDisplay: "readonly",
        clearDisplay: "readonly",
        calculate: "readonly",
        squareRoot: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
