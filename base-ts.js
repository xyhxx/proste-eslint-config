module.exports = {
  rules: {
    "no-shadow": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "no-redeclare": 0,
    "@typescript-eslint/no-redeclare": 2,
    "@typescript-eslint/no-use-before-define": 2,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/no-implied-eval": 2, // 禁止eval
    "@typescript-eslint/no-extra-semi": 2, // 禁止多余冒号
    "@typescript-eslint/no-empty-function": 2, // 禁止空函数
    "@typescript-eslint/no-unsafe-return": 1, // 不允许返回any类型
    "@typescript-eslint/no-unnecessary-type-assertion": 1, // 类型断言没有改变类型时警告
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ["self"], // Allow `const self = this`; `[]` by default
      },
    ], // this别名的定义
    "@typescript-eslint/no-misused-promises": 2, // 避免滥用async
    "@typescript-eslint/no-extra-non-null-assertion": 2, // 禁止额外的非空断言
    "@typescript-eslint/no-empty-interface": 2, // 禁止定义空的接口
    "@typescript-eslint/explicit-module-boundary-types": 0, // 导出的函数必须显性定义返回类型
    "@typescript-eslint/ban-types": 1, // 禁止使用部分类型
    "@typescript-eslint/ban-ts-comment": 2, // 不允许ts指定注释
    "@typescript-eslint/await-thenable": 2, // 不允许等待不是未来值的
    "@typescript-eslint/adjacent-overload-signatures": 2, // 将重载函数写在一起
  },
};
