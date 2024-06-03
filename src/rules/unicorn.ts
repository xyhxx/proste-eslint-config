import type {Linter} from 'eslint';

const rules: Linter.RulesRecord = {
  'unicorn/consistent-destructuring': 1,
  'unicorn/consistent-empty-array-spread': 2,
  'unicorn/error-message': 2,
  'unicorn/escape-case': 1,
  'unicorn/new-for-builtins': 2,
  'unicorn/no-array-for-each': 2,
  'unicorn/no-array-push-push': 2,
  'unicorn/no-await-expression-member': 2,
  'unicorn/no-array-reduce': 2,
  'unicorn/no-await-in-promise-methods': 2,
  'unicorn/no-empty-file': 2,
  'unicorn/no-instanceof-array': 2,
  'unicorn/no-invalid-remove-event-listener': 2,
  'unicorn/no-new-array': 2,
  'unicorn/no-new-buffer': 2,
  'unicorn/no-object-as-default-parameter': 2,
  'unicorn/no-single-promise-in-promise-methods': 2,
  'unicorn/no-useless-fallback-in-spread': 2,
  'unicorn/number-literal-case': 2,
  'unicorn/prefer-add-event-listener': 1,
  'unicorn/prefer-number-properties': 1,
  'unicorn/throw-new-error': 2,
};

export default rules;
