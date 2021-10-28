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