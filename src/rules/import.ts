import type {Linter} from 'eslint';

const rules: Linter.RulesRecord = {
  'import/named': 0, // 禁止空导入
  'import/no-empty-named-blocks': 2, // 禁止空导入
  'import/no-absolute-path': 2, // 禁止使用绝对路径导入
  'import/first': 2, // import必须放在顶部
  'import/no-namespace': 0, // 禁止 * as xxx
  'import/newline-after-import': 1, // import与代码之间有空行
  'import/no-duplicates': [
    2,
    {
      considerQueryString: true,
    },
  ], // 禁止重复导入相同路径
  'import/export': 2, // 检查导出信息
  'import/no-mutable-exports': 2, // 禁止导出可变内容
  'import/no-dynamic-require': 2, // 禁止动态字符串
  'import/no-self-import': 2, // 禁止导入自己
  'import/no-useless-path-segments': 2, // 禁止多余的路径
  'import/consistent-type-specifier-style': [1, 'prefer-top-level'], // 规范import type的导入格式
};

export default rules;
