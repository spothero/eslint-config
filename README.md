# @spothero/eslint-config: SpotHero's Base ESLint Configuration
This module provides your project with an extendable base ESLint configuration to develop applications adhering to SpotHero's JavaScript coding standards. It also adds [Prettier](https://prettier.io/) support for JS development.

## Installation
`npm install @spothero/eslint-config prettier -D`

## Usage
Create an `.eslintrc` file in your project's root and add the following:
```
{
    "extends": [
        "@spothero",
        "plugin:prettier/recommended",
        "prettier/babel",
        "prettier/react"
    ]
}
```

Create a `.prettierrc` file in your project's root and add the following:
```
{
    "bracketSpacing": false,
    "endOfLine": "lf",
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "overrides": [
        {
            "files": "*.json",
            "options": {
                "tabWidth": 2
            }
        },
        {
            "files": "*.scss",
            "options": {
                "singleQuote": false
            }
        }
    ]
}
```

Optionally, add a `.prettierignore` file in your project's root with the below:
```
*.md
```

This will ignore formatting on `.md` files which could be annoying and cause display issues otherwise.
