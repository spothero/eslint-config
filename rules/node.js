module.exports = {
    plugins: [
        'node'
    ],
    settings: {
        node: {
            tryExtensions: ['.js', '.jsx', '.json', '.node']
        }
    },
    rules: {
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 0,
        'no-buffer-constructor': 2,
        'no-mixed-requires': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 2,
        'no-restricted-modules': 0,
        'no-sync': 0,
        'node/no-extraneous-import': [2, {
            allowModules: ['react-hot-loader']
        }],
        'node/no-extraneous-require': 2,
        'node/no-missing-import': 0,
        'node/no-missing-require': 0,
        'node/no-unpublished-bin': 2,
        'node/no-unpublished-import': 0,
        'node/no-unpublished-require': 0,
        'node/no-unsupported-features/es-builtins': 2,
        'node/no-unsupported-features/es-syntax': 0,
        'node/no-unsupported-features/node-builtins': 2,
        'node/process-exit-as-throw': 2,
        'node/shebang': 2,
        'node/no-deprecated-api': 2,
        'node/exports-style': 2,
        'node/prefer-global/buffer': [2, 'never'],
        'node/prefer-global/console': 2,
        'node/prefer-global/process': 2,
        'node/prefer-global/text-decoder': 2,
        'node/prefer-global/text-encoder': 2,
        'node/prefer-global/url-search-params': [2, 'never'],
        'node/prefer-global/url': [2, 'never']
    }
};
