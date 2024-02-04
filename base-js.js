module.exports = {
  rules: {
    'prefer-destructuring': 1,
    'symbol-description': 2,
    'prefer-promise-reject-errors': 2,
    'no-useless-return': 2,
    'no-useless-rename': 2,
    'no-useless-constructor': 2,
    'no-useless-computed-key': 2,
    'no-unreachable-loop': 2,
    'no-template-curly-in-string': 2,
    'no-array-constructor': 2,
    // 禁止没有await表达式的异步函数
    'require-await': 2,
    // 箭头函数是否必须使用花括号将函数体包裹
    'arrow-body-style': [
      1,
      'as-needed',
      {requireReturnForObjectLiteral: false},
    ],
    // await禁止可能由于使用或导致竞争条件的分配yield 在编写异步代码时，可能会产生微妙的竞争条件错误。
    'require-atomic-updates': 2,
    'no-unused-private-class-members': 2, // 禁止未使用的私有成员
    'no-unmodified-loop-condition': 2, // 禁止未修改的循环条件 防止死循环
    'no-useless-catch': 1, // 禁止不必要的catch
    'array-callback-return': [2, {allowImplicit: true}], // 强制数组方法的回调函数中有 return 语句
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ], // 优先使用const
    curly: [1, 'multi-or-nest', 'consistent'],
    'max-params': [2, 3],
    'no-unused-vars': [
      1,
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ], //不能有声明后未被使用的变量或参数
    'no-use-before-define': 2, //未定义前不能使用
    //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-shadow': 0,
    'no-new-symbol': 2, //禁止 Symbol 操作符和 new 一起使用
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-useless-escape': 2, // 禁止不必要的转义字符
    'no-unused-labels': 2, // 禁用出现未使用过的label语句
    'no-self-assign': 2, // 禁止自我赋值
    'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    'for-direction': 2, // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'no-unsafe-finally': 2, // finally 中不能出现控制语句
    'no-prototype-builtins': 1,
    'no-async-promise-executor': 2, // 禁止使用异步函数作为 Promise executor
    'no-compare-neg-zero': 2, // 禁止与-0比较
    'no-multi-assign': 2, // 禁止连续赋值
    'no-empty-function': 2, // 禁止空函数
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-case-declarations': 2, //	不允许在 case 子句中使用词法声明
    'getter-return': 2,
    'no-alert': 0, //禁止使用alert confirm prompt
    'no-bitwise': 0, //禁止使用按位运算符
    'no-caller': 2, //禁止使用arguments.caller或arguments.callee
    'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-console': 1, //禁止使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-continue': 0, //禁止使用continue
    'no-control-regex': 2, //禁止在正则表达式中使用控制字符
    'no-debugger': 1, //禁止使用debugger
    'no-delete-var': 2, //不能对var声明的变量使用delete操作符
    'no-div-regex': 1, //不能使用看起来像除法的正则表达式/=foo/
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 1, //如果if语句里面有return,后面不能跟else语句
    'no-empty': 1, //块语句中的内容不能为空
    'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
    'no-eq-null': 0, //禁止对null使用==或!=运算符
    'no-eval': 2, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-extend-native': 2, //禁止扩展native对象
    'no-extra-bind': 2, //禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, //禁止不必要的bool转换
    'no-fallthrough': 2, //禁止switch穿透
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-inline-comments': 0, //禁止行内备注
    'no-inner-declarations': [2, 'functions'], //禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-invalid-this': 2, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-iterator': 2, //禁止使用__iterator__ 属性
    'no-label-var': 2, //label名不能与var声明的变量名相同
    'no-labels': 2, //禁止标签声明
    'no-lone-blocks': 2, //禁止不必要的嵌套块
    'no-lonely-if': 0, //禁止else语句内只有if语句
    'no-loop-func': 2, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-mixed-requires': [0, false], //声明时不能混用声明类型
    'no-multi-str': 2, //字符串不能用\换行
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 2, //in 操作符的左边不能有!
    'no-nested-ternary': 0, //禁止使用嵌套的三目运算
    'no-new': 0, //禁止在使用new构造一个实例后不赋值
    'no-new-func': 2, //禁止使用new Function
    'no-new-object': 2, //禁止使用new Object()
    'no-new-require': 2, //禁止使用new require
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
    'no-obj-calls': 2, //不能调用内置的全局对象，比如Math() JSON()
    'no-octal': 2, //禁止使用八进制数字
    'no-octal-escape': 2, //禁止使用八进制转义序列
    'no-param-reassign': 2, //禁止给参数重新赋值
    'no-path-concat': 0, //node中不能使用__dirname或__filename做路径拼接
    'no-plusplus': 0, //禁止使用++，--
    'no-process-env': 0, //禁止使用process.env
    'no-process-exit': 0, //禁止使用process.exit()
    'no-proto': 2, //禁止使用__proto__属性
    'no-redeclare': 2, //禁止重复声明变量
    'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-restricted-modules': 0, //如果禁用了指定模块，使用就会报错
    'no-return-assign': 2, //return 语句中不能有赋值表达式
    'no-script-url': 0, //禁止使用javascript:void(0)
    'no-self-compare': 2, //不能比较自身
    'no-sequences': 2, //禁止使用逗号运算符
    'no-shadow-restricted-names': 2, //严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-spaced-func': 1, //函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 1, //禁止稀疏数组， [1,,2]
    'no-sync': 0, //nodejs 禁止同步方法
    'no-ternary': 0, //禁止使用三目运算符
    'no-this-before-super': 2, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
    'no-undef': 2, //不能有未定义的变量
    'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
    'no-undefined': 2, //不能使用undefined
    'no-unexpected-multiline': 1, //避免多行表达式
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unused-expressions': 0, //禁止无用的表达式
    'no-useless-call': 1, //禁止不必要的call和apply
    'no-void': 0, //禁用void操作符
    'no-var': 2, //禁用var，用let和const代替
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start',
      },
    ], //不能有警告备注
    'no-with': 2, //禁用with
    'accessor-pairs': 2, //强制 getter 和 setter 在对象中成对出现
    'block-scoped-var': 2, //块语句中使用var
    'callback-return': 1, //避免多次调用回调什么的
    camelcase: [
      2,
      {
        allow: ['^UNSAFE_'],
      },
    ], //强制驼峰法命名
    complexity: 0, //循环复杂度
    'consistent-return': 0, //要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-this': [2, 'self'], //this别名
    'constructor-super': 2, //非派生类不能调用super，派生类必须调用super
    'default-case': 0, //switch语句最后必须有default
    'dot-notation': 0, //避免不必要的方括号
    eqeqeq: [2, 'always', {null: 'ignore'}], //必须使用全等
    'func-names': 0, //函数表达式必须有名字
    'func-style': [0, 'declaration'], //函数风格，规定只能使用函数声明/函数表达式
    'guard-for-in': 0, //for in循环要用if语句过滤
    'handle-callback-err': 0, //nodejs 处理错误
    'id-length': 0, //变量名长度
    'init-declarations': 0, //声明时必须赋初值
    'max-depth': [0, 4], //嵌套块深度
    'max-nested-callbacks': [0, 2], //回调嵌套深度
    'max-statements': [0, 10], //函数内最多有几个声明
    'new-cap': [2, {newIsCap: true, capIsNew: false, properties: true}], //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'newline-after-var': 0, //变量声明后是否需要空一行
    'object-shorthand': [1, 'always'], //强制对象字面量缩写语法
    'one-var': 0, //连续声明
    'operator-assignment': [1, 'always'], //赋值运算符 += -=什么的
    'prefer-spread': 1, //首选展开运算
    'prefer-reflect': 0, //首选Reflect的方法
    radix: 0, //parseInt必须指定第二个参数
    'id-match': 0, //命名检测
    'require-yield': 0, //生成器函数必须有yield
    'sort-vars': 0, //变量声明时排序
    'space-after-keywords': [0, 'always'], //关键字后面是否要空一格
    strict: 2, //使用严格模式
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'valid-jsdoc': 0, //jsdoc规则
    'valid-typeof': 2, //必须使用合法的typeof的值
    'vars-on-top': 2, //var必须放在作用域顶部
    yoda: [2, 'never'], //禁止尤达条件
  },
};
