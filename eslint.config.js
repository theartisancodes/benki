const { FlatCompat } = require('@eslint/eslintrc');
const { configs } = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname
});

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        jest: true
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      storybook: require('eslint-plugin-storybook')
    },
    rules: {
      '@next/next/link-passhref': 'off',
      '@next/next/no-img-element': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'space-before-function-paren': 'off',
      'linebreak-style': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off',
      'import/no-default-export': 'warn'
    }
  },
  ...compat.extends('next'),
  ...compat.extends('plugin:storybook/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    files: ['*.stories.tsx'],
    rules: {
      'import/no-default-export': 'off'
    }
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-pattern': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-self-compare': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-useless-rename': 'error',
      camelcase: ['off', { ignoreDestructuring: true }],
      'consistent-return': 'off',
      curly: ['error', 'multi-line'],
      'dot-notation': 'error',
      eqeqeq: ['error', 'always'],
      'max-lines': [
        'warn',
        { max: 300, skipBlankLines: true, skipComments: true }
      ],
      'no-alert': 'warn',
      'no-array-constructor': 'error',
      'no-else-return': 'error',
      'no-empty': ['error'],
      'no-extra-boolean-cast': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'require-await': 'error',
      'spaced-comment': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': ['error', 'consistent', { minItems: 3 }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': 'error',
      'comma-spacing': 'error',
      'jsx-quotes': 'error',
      'max-len': [
        'error',
        {
          code: 120,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
          ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
        }
      ],
      'object-curly-newline': ['error', { consistent: true }],
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: 'error',
      'semi-style': ['error', 'last'],
      'template-curly-spacing': 'error',
      'no-var': 'error',
      'import/no-anonymous-default-export': 'off'
    }
  }
];
