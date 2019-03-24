"use strict";

/*
* 1 本地如何编译ES6
*   1.现在插件 babel-core
*   2. babel-preset-env
*   3. 通过指令编译 babel-cli
*   4. 写配置文件 .babelrc => 严格按照JSON格式编写 {
*           presets，=> 预设
*           plugins => 插件 
*   }
*   5. cmd命令行语句 <yarn babel 文件名 -o 新文件名> 
    6. <yarn babel 文件名 -o 新文件名> -watch 实时监听文件变化
*/
function comSum() {
  var sum = 0;

  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  arg.forEach(function (ele) {
    sum += ele;
  });
  return sum;
}

function avSum() {
  for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arg[_key2] = arguments[_key2];
  }

  // console.log(...arg)
  arg.sort(function (a, b) {
    return a - b;
  });
  arg.pop();
  arg.shift();
  return comSum.apply(void 0, arg);
}

console.log(avSum(23, 34, 34, 45, 56, 78, 12));
