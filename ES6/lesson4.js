/**
 *  ES5 - Object.defineProperty() 
 *      在es5后续的迭代版本中，也在致力于一件事，就是将js底层的已有的功能，报露出来供
 *   给开发者使用。Object.defineProperty就是其中之一。
 *      此方法就是可直接在一个对象上定义一个新的具有详细描述的属性，后者修改一个对象的现有属性，并返回这个对象
 *      使用： {
 *           Object.defineProperty(对象，属性，描述符)
 *           描述符对对象的属性进行详细描述：
 *              数据描述符：
 *                      value：'' 属性值。默认''
 *                      writable:true,是否可写 默认：false
 *                      configurable：true，是否可配置 默认：false
 *                      enumerable:true, 是否可枚举 默认：false
 * 
 *              存取描述符：
 *                      set:function() {} 属性访问器 进行写操作时调用该方法
 *                      get:function() {} 属性访问器 进行读操作时调用该方法
 *        
 *      }
 * 
 * 
 *              Object.defineProperty(obj, 'name', function () {
 *                  name:'ljl',
 *                  writable:true,
 *                  configurable:true,
 *                  enumerable:true,
 *                  get:function () {},  
 *                  setLfunction() {},
 * 
 * 
 * 
 *                  get,set 和 属性 writable 不能同时存在  
 *              })
 *          
 *              可以简便写法 
 *                  let obj = {
 *                      valueName:'',
 *                       get () {
 *                           return valueName;     
 *                      },
 *                      set (newValue) {
 *                           this.valueName = newValue;
 *                      }
 *                  }
 *              console.log(obj.valueName) // 打印空
 *              obj.valueName = 10;
 *              console.log(obj.valueName) // 打印 10
 *          
 *  ES5 - 数据劫持 
 *  运用于vue 中的双向数据绑定
 *  简单模拟双向数据绑定   
 *     例 => 见 difineProperty.html
 * 
 *  ES6 - proxy & reflect (代理和映射) 
 *          
 */
