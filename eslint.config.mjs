// eslint.config.mjs
import eslint from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Ignorar carpetas
  {
    ignores: ['dist', 'node_modules', 'build', '.next'],
  },

  // Configuración global del proyecto
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.app.json', // importante para reglas con tipado
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Configuraciones base de JavaScript
  eslint.configs.recommended,

  // Configuración recomendada de React
  pluginReact.configs.flat.recommended,

  // Configuración para hooks de React
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Reglas de TypeScript con soporte para tipado
  ...tseslint.configs.recommendedTypeChecked,

  // Reglas de Prettier
  pluginPrettier,

  // Reglas personalizadas
  {
    rules: {
      // TypeScript
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',

      // JS/ESLint
      'object-curly-spacing': ['error', 'always'],
      'prefer-const': 'error',
      eqeqeq: ['warn', 'always'],
      'no-console': 'warn',
      'no-debugger': 'error',

      // React
      'react/react-in-jsx-scope': 'off', // No es necesario con React 17+
    },
  },
];
