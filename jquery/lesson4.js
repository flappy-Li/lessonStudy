/**
 * 
 * @param { next, prev, prevAll, nextAll, prevUntil, nextUntil } jQuery Object增删改查
 * 
 * .next() => {
 *      选择当前元素的下一个兄弟元素节点  里面可以添加参数 当做参数 符合条件的才能被选择出来
 *      
 *      例如 
 *       <!-- html部分 -->
 *       <button></button>
 *       <p>123</p>
 *       <div>234</div>
 *       < !--js部分-- >
 *       $('button).click(function () {
 *          $(this).next(p).css({color:'red', fontSize: '20px'})
 *       })
 * }
 * .prev() => {
 *      选择当前元素的上一个兄弟元素节点 用法与next一样 
 * }
 * .prevAll() => {
 *      选择当前元素前面的所有元素节点  操作同上 
 * }
 * .nextAll () => {
 *      选择当前元素后面的所有元素节点  同上
 * }
 * .prevUntil() => {
 *      选择当前元素前面的所有元素节点 可以填写两个参数 (1: 填写到什么位置结束的标签 截止的范围 2: 在这个范围中想要获取哪些元素的规则)
 * }
 * .nextUntil() => {
 *      选择当前元素后面的所有元素节点  同上
 * }
 * 
 */

 
 //结束于 2019/07/30