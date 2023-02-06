module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "boundaries"
  ],
  extends: [
    "eslint:recommended",
    "plugin:boundaries/recommended"
  ],
  settings: {
    "boundaries/elements": [
      {
        "type": "assets",
        "pattern": "src/assets"
      },
      {
        "type": "components",
        "pattern": "src/components"
      },
      {
        "type": "contexts",
        "pattern": "src/contexts"
      },
      {
        "type": "css",
        "pattern": "src/css",
      },
      {
        "type": "pages",
        "pattern": "src/pages",
      },
    ]
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-dangle": ["error", "never"],
    "no-console" : "warn",
  }
};