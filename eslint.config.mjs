import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: { document: "readonly" },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
];

//installerar detta npm install --save-dev eslint @eslint/js
