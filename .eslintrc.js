module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended", // if you want to extend the recommended TypeScript rules
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // Disable the rule
  },
};
