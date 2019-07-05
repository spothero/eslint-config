module.exports = {
    rules: {
        'array-bracket-newline': 0,
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': 0,
        'block-spacing': 2,
        'brace-style': [2, '1tbs', {
            allowSingleLine: true
        }],
        camelcase: 2,
        'capitalized-comments': 0,
        'comma-dangle': 0,
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'consistent-this': [2, 'self'],
        'eol-last': 2,
        'func-call-spacing': 2,
        'func-name-matching': 2,
        'func-names': 2,
        'func-style': 0,
        'function-paren-newline': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'implicit-arrow-linebreak': 2,
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'jsx-quotes': [2, 'prefer-double'],
        'key-spacing': 2,
        'keyword-spacing': 2,
        'line-comment-position': 0,
        'linebreak-style': 2,
        'lines-around-comment': 0,
        'lines-between-class-members': 0,
        'max-depth': [2, 8],
        'max-len': 0,
        'max-lines': 0,
        'max-lines-per-function': 0,
        'max-nested-callbacks': [2, {
            max: 3
        }],
        'max-params': 0,
        'max-statements': 0,
        'max-statements-per-line': 0,
        'multiline-comment-style': 0,
        'multiline-ternary': 0,
        'new-cap': 0,
        'new-parens': 2,
        'newline-per-chained-call': 2,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 2,
        'no-inline-comments': 0,
        'no-lonely-if': 0,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': [2, {
            max: 1,
            maxEOF: 1
        }],
        'no-negated-condition': 0,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': [2, {
            skipBlankLines: true
        }],
        'no-underscore-dangle': [2, {
            allowAfterThis: true
        }],
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': 0,
        'object-property-newline': 0,
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'always'],
        'operator-assignment': 2,
        'operator-linebreak': [2, 'before', {
            overrides: {
                '?': 'ignore',
                ':': 'ignore',
                '&&': 'ignore',
                '||': 'ignore'
            }
        }],
        'padded-blocks': [2, 'never'],
        'padding-line-between-statements': [2,
            {blankLine: 'always', prev: '*', next: 'return'}
        ],
        'prefer-object-spread': 2,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        'require-jsdoc': 0,
        semi: 2,
        'semi-spacing': 2,
        'semi-style': 2,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-in-parens': 2,
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            words: true,
            nonwords: false
        }],
        'spaced-comment': 1,
        'switch-colon-spacing': 2,
        'template-tag-spacing': 2,
        'unicode-bom': 2,
        'wrap-regex': 0
    }
};
