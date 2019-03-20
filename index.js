module.exports = {
    extends: [
        './rules/best-practices',
        './rules/es6',
        './rules/node',
        './rules/possible-errors',
        './rules/react',
        './rules/spothero',
        './rules/stylistic-issues',
        './rules/variables'
    ].map(require.resolve),
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true
    },
    globals: {
        context: true,
        Cypress: true,
        cy: true,
        Given: true,
        When: true,
        Then: true,
    }
};
