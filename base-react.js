module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-max-props-per-line": [
      2,
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/void-dom-elements-no-children": 2,
    "react/self-closing-comp": [
      2,
      {
        "component": true,
        "html": true
      }
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        "return": "parens-new-line",
        "arrow": "parens-new-line"
      }
    ],
    "react/jsx-tag-spacing": [
      2,
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-indent": [
      2,
      2
    ],
    "react/jsx-fragments": [
      2,
      "syntax"
    ],
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-equals-spacing": [
      2,
      "never"
    ],
    "react/jsx-curly-spacing": [
      2,
      {
        "when": "never",
        "children": {
          "when": "never"
        }
      }
    ],
    "react/jsx-closing-bracket-location": [
      2,
      "line-aligned"
    ],
    "react/jsx-boolean-value": [2, "never"], // true的attr不填写
    "react/jsx-uses-vars": 2, // 组件引用后必须使用
    "react/jsx-no-undef": [
      2,
      {
        "allowGlobals": true
      }
    ], // 防止未定义的组件
    "react/jsx-no-target-blank": [
      2,
      {
        "allowReferrer": true,
        "enforceDynamicLinks": 'always'
      }
    ], // target='_blank'必须跟rel="noopener noreferrer"
    "react/jsx-no-duplicate-props": 2, // 防止自定义属性有重名问题
    "react/jsx-no-comment-textnodes": 2, // 规定注释格式
    "react/jsx-key": 2, // 循环元素必须有key
    "react/no-find-dom-node": 2, // 不允许使用findDOMNode
    "react/no-deprecated": 1, // 警告已废弃的api
    "react/no-danger-with-children": 2, // 不允许children和dangerouslySetInnerHTML同时使用
    "react/no-children-prop": 2, // 不允许children作为prop传递
    "react/prop-types": 0, // 是否定义props传递类型
    "react/display-name": 2, // 函数组件是否必须命名
    // typescript react 引入问题
    "react/react-in-jsx-scope": 0,
  },
};