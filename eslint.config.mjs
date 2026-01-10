import js from '@eslint/js';
import next from 'eslint-config-next';

const eslintConfig = [
  js.configs.recommended,
  ...next(),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-duplicate-imports': 'error',
      'eqeqeq': ['error', 'always'],
    },
  },
];

export default eslintConfig;
