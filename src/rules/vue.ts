import type {Linter} from 'eslint';

const rules: Linter.RulesRecord = {
  'vue/require-default-prop': 0,
  'vue/v-on-event-hyphenation': [1, 'never'],
  'vue/multi-word-component-names': 0,
  'vue/max-attributes-per-line': [
    1,
    {
      singleline: {
        max: 10,
      },
      multiline: {
        max: 1,
      },
    },
  ],
  'vue/mustache-interpolation-spacing': [1, 'never'],
  'vue/attribute-hyphenation': [2, 'never'],
  'vue/html-self-closing': [
    1,
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/singleline-html-element-content-newline': 0,
  'vue/attributes-order': 0,
  'vue/component-tags-order': [
    1,
    {
      order: ['script', 'template', 'style'],
    },
  ],
  'vue/component-api-style': 0,
  'vue/component-name-in-template-casing': [1, 'PascalCase'],
  'vue/component-options-name-casing': [1, 'PascalCase'],
  'vue/custom-event-name-casing': [1, 'camelCase'],
  'vue/define-props-declaration': [1, 'type-based'],
  'vue/no-empty-component-block': 1,
  'vue/no-multiple-objects-in-class': 1,
  'vue/no-useless-v-bind': 2,
  'vue/no-useless-mustaches': 1,
  'vue/prefer-define-options': 1,
  'vue/prefer-true-attribute-shorthand': 1,
  'vue/html-quotes': 1,
  'vue/no-static-inline-styles': 2,
};

export default rules;
