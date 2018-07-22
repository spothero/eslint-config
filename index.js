module.exports = {
    extends: [
        './rules/babel',
        './rules/best-practices',
        './rules/es6',
        './rules/possible-errors',
        './rules/react',
        './rules/stylistic-issues',
        './rules/variables'
    ].map(require.resolve),
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
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
        cy: true
    }
};
