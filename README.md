# @spothero/eslint-config: SpotHero's Base ESLint Configuration
This module provides your project with an extendable base ESLint configuration to develop applications adhering to SpotHero's JavaScript coding standards. It also adds [Prettier](https://prettier.io/) support for JS development.

## Installation
`npm install @spothero/eslint-config @spothero/prettier-config -D`

## Usage
Create an `eslintConfig` key in your `package.json` file and extend this configuration:
```
{
    "eslintConfig": {
        "extends": [
            "@spothero",
            "plugin:prettier/recommended",
            "prettier/babel",
            "prettier/react"
        ]
    }
}
```

Lastly, set up the Prettier configuration according to the [usage guide](https://github.com/spothero/prettier-config#usage).
