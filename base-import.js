module.exports = {
  extends: ['plugin:import-x/recommended'],
  rules: {
    'import-x/no-deprecated': 2, // 禁止使用已废弃的内容
    'import-x/no-empty-named-blocks': 2, // 禁止空导入
    'import-x/no-mutable-exports': 2, // 禁止导出可变内容
    'import-x/no-named-as-default': 2, // 检测拆包名称可能会占用default名称
    'import-x/no-named-as-default-member': 2, // 禁止default上使用其他导出成员
    'import-x/no-namespace': 0, // 禁止 * as xxx
    'import-x/no-absolute-path': 2, // 禁止使用绝对路径导入
    'import-x/no-self-import': 2, // 禁止导入自己
    'import-x/no-useless-path-segments': 2, //禁止不必要的路径段
    'import-x/consistent-type-specifier-style': [1, 'prefer-top-level'], // 规范import type的导入格式
    'import-x/first': 1, // import必须放在顶部
    'import-x/newline-after-import': 1, // import与代码之间有空行
    'import-x/no-duplicates': [
      1,
      {
        considerQueryString: true,
      },
    ], // 禁止重复导入相同路径
    'import-x/no-dynamic-require': 2, // 禁止动态字符串
    'import-x/no-unresolved': 0,
  },
};
