import js from '@eslint/js';
import next from 'eslint-config-next';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  js.configs.recommended,
  // eslint-config-next v16 exporta um array de flat configs, não uma função.
  ...next,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript já resolve identificadores; a regra do ESLint base
      // desconhece os tipos globais do DOM e daria falso positivo.
      'no-undef': 'off',
      // Substituída pela versão do @typescript-eslint, que entende tipos.
      'no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-duplicate-imports': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
];

export default eslintConfig;
