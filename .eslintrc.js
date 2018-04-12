module.exports = {
  "extends": "airbnb",
  "rules": {
		"no-tabs": 0,
		"linebreak-style": 0,
		"react/prop-types": [0],
		"indent": ["error", 2],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-unused-vars": [ "error", { "argsIgnorePattern": "next" } ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-useless-escape": "off",
  }
};
