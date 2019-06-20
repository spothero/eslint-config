module.exports = {
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.test.js'],
            rules: {
                'max-nested-callbacks': 0,
                'no-unused-expressions': 0,
                'no-console': 0,
                'no-undefined': 0,
                'react/jsx-handler-names': 0,
                'camelcase': 0,
            }
        }
    ]
};
