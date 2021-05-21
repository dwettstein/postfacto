module.exports = {
  'extends': [
    'react-app',
    'airbnb',
  ],
  'rules': {
    'arrow-parens': ['error', 'always'],
    'camelcase': ['off'],
    'class-methods-use-this': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'max-classes-per-file': ['off'],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['off'],
    'object-curly-newline': ['error', {
      'consistent': true,
    }],
    'object-curly-spacing': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['off'],
    'prefer-object-spread': ['off'],
    'prefer-template': ['off'],
    'quote-props': ['error', 'consistent'],
    'react/destructuring-assignment': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-no-bind': ['error', {
      'ignoreDOMComponents': false,
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowFunctions': false,
      'allowBind': false,
    }],
    'react/jsx-no-target-blank': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/no-unescaped-entities': ['off'],
    'react/sort-comp': ['off'],
    'react/static-property-placement': ['off'],
  },

  'overrides': [{
    'files': ['**/test_support/*', 'spec_helper.*', '*.test.*'],
    'rules': {
      'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    },
  }],
};
