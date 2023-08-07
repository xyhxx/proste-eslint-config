module.exports = {
  rules: {
    'no-extra-parens': 0,
    '@typescript-eslint/no-extra-parens': 0,
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-implied-eval': 0,
    '@typescript-eslint/no-implied-eval': 2, // 禁止eval
    'no-extra-semi': 0, //禁止多余的冒号
    '@typescript-eslint/no-extra-semi': 2, // 禁止多余冒号
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 2, // 禁止空函数
    'object-curly-spacing': 0,
    '@typescript-eslint/object-curly-spacing': 1,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 2,
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 2,
    'func-call-spacing': 0,
    '@typescript-eslint/func-call-spacing': 1,
    'require-await': 0,
    '@typescript-eslint/require-await': 2,
    'no-dupe-class-members': 0,
    '@typescript-eslint/no-dupe-class-members': 2,
    'no-invalid-this': 0,
    '@typescript-eslint/no-invalid-this': 2,
    'no-loop-func': 0,
    '@typescript-eslint/no-loop-func': 2,
    'no-throw-literal': 0,
    '@typescript-eslint/no-throw-literal': 2,
    indent: 0,
    '@typescript-eslint/indent': [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
      },
    ],
    'brace-style': 0,
    '@typescript-eslint/brace-style': [1, '1tbs'],
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': [
      1,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    'comma-spacing': 0,
    '@typescript-eslint/comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    quotes: 0,
    '@typescript-eslint/quotes': [1, 'single'],
    semi: 0,
    '@typescript-eslint/semi': [2, 'always'],
    'space-before-blocks': 0,
    '@typescript-eslint/space-before-blocks': [1, 'always'],
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': [
      1,
      {anonymous: 'never', named: 'never', asyncArrow: 'always'},
    ],
    'space-infix-ops': 0,
    '@typescript-eslint/space-infix-ops': 1,
    'keyword-spacing': 0,
    '@typescript-eslint/keyword-spacing': 1,
    'lines-between-class-members': 0,
    '@typescript-eslint/lines-between-class-members': [
      1,
      'always',
      {exceptAfterSingleLine: false},
    ],

    '@typescript-eslint/member-delimiter-style': [
      1, {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ], // 类型属性后加,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: [
          'interface',
          'enum',
          'typeAlias',
          'typeParameter',
          'enumMember',
          'class',
        ],
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: [
          'function',
          'classMethod',
          'classProperty',
          'objectLiteralMethod',
          'accessor',
          'objectLiteralProperty',
          'parameterProperty',
          'typeMethod',
          'typeProperty',
        ],
        format: ['camelCase'],
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/consistent-type-definitions': [1, 'type'],
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/no-unsafe-return': 0, // 不允许返回any类型
    '@typescript-eslint/no-explicit-any': 0, // 是否允许使用any类型
    '@typescript-eslint/no-unnecessary-type-assertion': 1, // 类型断言没有改变类型时警告
    '@typescript-eslint/no-this-alias': [
      1,
      {
        // Disallow `const { props, state } = this`; true by default
        allowDestructuring: true,
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ], // this别名的定义
    '@typescript-eslint/no-misused-promises': [
      1,
      {
        checksVoidReturn: false,
      },
    ], // 避免滥用async
    '@typescript-eslint/no-non-null-assertion': 0, // 非空提示
    '@typescript-eslint/no-extra-non-null-assertion': 2, // 禁止额外的非空断言
    '@typescript-eslint/no-empty-interface': 2, // 禁止定义空的接口
    '@typescript-eslint/explicit-module-boundary-types': 0, // 导出的函数必须显性定义返回类型
    '@typescript-eslint/ban-types': 1, // 禁止使用部分类型
    '@typescript-eslint/ban-ts-comment': 2, // 不允许ts指定注释
    '@typescript-eslint/await-thenable': 2, // 不允许等待不是未来值的
    '@typescript-eslint/adjacent-overload-signatures': 1, // 将重载函数写在一起
  },
};
