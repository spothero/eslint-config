module.exports = {
    rules: {
        'init-declarations': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 2,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 2,
        'no-unused-vars': [2, {
            vars: 'all',
            args: 'none'
        }],
        'no-use-before-define': [2, {
            functions: false,
            classes: true
        }]
    }
};
