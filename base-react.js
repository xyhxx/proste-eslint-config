module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-unknown-property': 1,
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-curly-newline': 1,
    'react/jsx-closing-tag-location': 1, // 强制jsx结束标签位置
    'react/hook-use-state': [
      1,
      {allowDestructuredState: true},
    ], // 强制useState getter和setter命名对称
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/void-dom-elements-no-children': 1,
    'react/self-closing-comp': [
      1,
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-wrap-multilines': [
      1,
      {
        return: 'parens-new-line',
        arrow: 'parens-new-line',
      },
    ],
    'react/jsx-tag-spacing': [
      1,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-indent-props': [
      2,
      2,
    ],
    'react/jsx-indent': [
      2,
      2,
    ],
    'react/jsx-fragments': [
      1,
      'syntax',
    ],
    'react/jsx-first-prop-new-line': [
      1,
      'multiline',
    ],
    'react/jsx-equals-spacing': [
      1,
      'never',
    ],
    'react/jsx-curly-spacing': [
      1,
      {
        when: 'never',
        children: {
          when: 'never',
        },
      },
    ],
    'react/jsx-closing-bracket-location': [
      1,
      'line-aligned',
    ],
    'react/jsx-boolean-value': [1, 'never'], // true的attr不填写
    'react/jsx-uses-vars': 2, // 组件引用后必须使用
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true,
      },
    ], // 防止未定义的组件
    'react/jsx-no-target-blank': [
      2,
      {
        allowReferrer: true,
        enforceDynamicLinks: 'always',
      },
    ], // target='_blank'必须跟rel="noopener noreferrer"
    'react/jsx-no-duplicate-props': 2, // 防止自定义属性有重名问题
    'react/jsx-no-comment-textnodes': 1, // 规定注释格式
    'react/jsx-key': 2, // 循环元素必须有key
    'react/no-find-dom-node': 1, // 不允许使用findDOMNode
    'react/no-deprecated': 1, // 警告已废弃的api
    'react/no-danger-with-children': 2, // 不允许children和dangerouslySetInnerHTML同时使用
    'react/no-children-prop': 1, // 不允许children作为prop传递
    'react/prop-types': 0, // 是否定义props传递类型
    'react/display-name': 1, // 函数组件是否必须命名
    // typescript react 引入问题
    'react/react-in-jsx-scope': 0,
  },
};
