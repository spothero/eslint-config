module.exports = {
    plugins: ['node'],
    settings: {
        node: {
            tryExtensions: ['.js', '.jsx', '.json', '.node'],
        },
    },
    rules: {
        // possible errors
        'node/handle-callback-err': 0,
        'node/no-callback-literal': 0,
        'node/no-exports-assign': 2,
        'node/no-extraneous-import': [
            2,
            {
                allowModules: ['react-hot-loader'],
            },
        ],
        'node/no-extraneous-require': 2,
        'node/no-missing-import': 0,
        'node/no-missing-require': 0,
        'node/no-new-require': 2,
        'node/no-path-concat': 2,
        'node/no-process-exit': 2,
        'node/no-unpublished-bin': 2,
        'node/no-unpublished-import': 0,
        'node/no-unpublished-require': 0,
        'node/no-unsupported-features/es-builtins': 2,
        'node/no-unsupported-features/es-syntax': 0,
        'node/no-unsupported-features/node-builtins': 2,
        'node/process-exit-as-throw': 2,
        'node/shebang': 2,
        // best practices
        'node/no-deprecated-api': 2,
        // stylistic issues
        'node/callback-return': 0,
        'node/exports-style': 2,
        'node/file-extension-in-import': [
            2,
            'always',
            {'.js': 'never', '.jsx': 'never'},
        ],
        'node/global-require': 0,
        'node/no-mixed-requires': 2,
        'node/no-process-env': 0,
        'node/no-restricted-import': 0,
        'node/no-restricted-require': 0,
        'node/no-sync': 0,
        'node/prefer-global/buffer': [2, 'never'],
        'node/prefer-global/console': 2,
        'node/prefer-global/process': 2,
        'node/prefer-global/text-decoder': 2,
        'node/prefer-global/text-encoder': 2,
        'node/prefer-global/url-search-params': [2, 'never'],
        'node/prefer-global/url': [2, 'never'],
        'node/prefer-promises/dns': 2,
        'node/prefer-promises/fs': 2,
    },
};
