const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              vue$: 'vue/dist/vue.esm.js',
              '@': path.join(__dirname, '', 'src')
            }
          }
        }
      }
    }
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      json: 'never'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
        void: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    indent: [2, 2],
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 0,
    'linebreak-style': 'off',
    'no-bitwise': ['error', { allow: ['&'] }],
    'no-nested-ternary': 0,
    'import/first': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'class-methods-use-this': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
