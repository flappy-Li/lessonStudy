/* ES6 基本
* 1 let
*   1.加强了作用于的控制
*       {
*           1.let 在{}当中会产生块级作用域，
*             let的生命周期就在{}里。
*           2.临时死区 TDZ
*       }
*   2. const 
*           1.定义常量 不可改变
*           2.初始化必须赋值
*           3.存储常量的空间里面的值不可以发生改变 即(引用值可以发生改变)
*               例 {
*                   const PI = {
*                       name: 10,        
*                       }
*                   }
*               PI.name = 20 => cosole.log(PI.name) = 输出 => 20;
*   3. ...运算符 
*       speed && rest
*           1 speed 
*               读取 let arg = [1,2,3] cosnole.log(...arg) => 展开作用
*           2 rest 
*               写入 function test(...arg) {}
*                   test(1,2,3) => 收集作用
*       作用：简化代码量，提升开发效率
*       ES6/ES7 ES6 => 可以处理数组
*               ES7 => 增加处理对象
*       JSON.parse(JSON.stringify(function(){}); 浅克隆
*   4. Object.assign({}, obj1, obj2) => 实现浅克隆
*        ES7 => ...{}结构对象 可以实现浅克隆
*   5. ES6 => destructuing 解构
*       解构 (结构化赋值) => 
*               解构过程中，具备赋值和变量声明俩个功能 
*               目的在于把等号两边长相相似的两个东西内部的值取出来
*               
*               对象数组都可以参与解构：
*                   let obj = {
*                           name: 'lijjilong',
*                           age: 18
*                       }
*                   let { name, age } = obj;
*                       或者
*                   let name, age;
*                   ({ name, age } = obj );
*       作用：简化书写长度，提升开发效率
*       默认参数：  
*               let { name, age, sex = 'male'} = obj;  
*       1. 数组解构
*          let arr = [1,2,3]
*          let [x, y, z] = arr;
* 
*       可以随意的取第几位上的值；
*      2. let arr = [1,2,3,4, {name:'123'}]
*         let [,,,{name}] = arr;
*  结束于 => 2019/03/24 
*/