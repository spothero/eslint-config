module.exports = {
    plugins: ['@babel'],
    rules: {
        'babel/new-cap': 2,
        'babel/no-invalid-this': 2,
        'babel/no-unused-expressions': [
            2,
            {
                allowTernary: true,
            },
        ],
        'babel/object-curly-spacing': 2,
        'babel/semi': 2,
    },
};
