module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/boolean-prop-naming': 0,
        'react/button-has-type': 0,
        'react/default-props-match-prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/display-name': 0,
        'react/forbid-component-props': [2, {
            forbid: ['style']
        }],
        'react/forbid-dom-props': 0,
        'react/forbid-elements': 0,
        'react/forbid-prop-types': 0,
        'react/forbid-foreign-prop-types': 2,
        'react/no-access-state-in-setstate': 2,
        'react/no-array-index-key': 0,
        'react/no-children-prop': 0,
        'react/no-danger': 0,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [2, {
            ignoreStateless: true
        }],
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-typos': 2,
        'react/no-string-refs': 2,
        'react/no-this-in-sfc': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unknown-property': 2,
        'react/no-unsafe': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': [2, {
            order: [
                'static-methods',
                'instance-variables',
                'lifecycle',
                '/^_on.+$/',
                'everything-else',
                'getters',
                'setters',
                'render'
            ],
            groups: {
                lifecycle: [
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'statics',
                    'defaultProps',
                    'state',
                    'constructor',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount'
                ]
            }
        }],
        'react/sort-prop-types': 0,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,
        'react/jsx-boolean-value': 2,
        'react/jsx-child-element-spacing': 0,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': 2,
        'react/jsx-equals-spacing': 2,
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx']
        }],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-handler-names': [2, {
            eventHandlerPrefix: '_on'
        }],
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-max-depth': 0,
        'react/jsx-max-props-per-line': [2, {
            maximum: 1
        }],
        'react/jsx-no-bind': [2, {
            ignoreRefs: true
        }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-curly-brace-presence': [2, 'never'],
        'react/jsx-pascal-case': 2,
        'react/jsx-props-no-multi-spaces': 2,
        'react/jsx-sort-default-props': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-tag-spacing': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2
    }
};
