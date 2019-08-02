/**
 *  @param { parent, parents, offsetParent, closest, slice } jQuery Object增删改查
 *  .parent() =>  {
 *      选择当前元素的上一个父级
 * }
 * .parents() => {
 *     选择当前元素的所有父级 可以填写规则 进行筛选
 * }
 * .offsetParent() => {
 *      选择距离当前元素最近的有定位的父级 
 * }
 * .closest() {
 *      选择距离当前元素的最近的父级  可以填写标签属性 进行筛选
 * }
 * .clice() => {
 *     截取方法 左闭右开 
 * }
 * 
 *  @param { insertBefore, before, insertAfter, after, append, appendTo }
 * .insertBefore () .before() 
 * .insertAfter() .after() 
 * .append() .appendTo() => {
 *      将选中的元素插入到另一个元素中
 * }
 *  
 * @param { remove, detach }
 * .remove() 
 * .datech() => {
 *      将选中的元素移除, 不同的是 remove 会将元素本身的事件也一块移除 datech则会保留
 * }
 * 
 * @param { wrap, wrapAll, wrapInner, unWrap} {
 *  .wrap() .wrapAll() 
 *  .wrapInner() .unWrap() => {
 *      操作子元素将 该子元素套上一层 父元素 删除子元素的外一层父元素 
 *      注: .unWrap() 删到父级为body层就会截止 
 *  }
 * 
 * @param { clone, data }
 * .clone() => {
 *      将dom元素进行克隆 只是克隆dom元素 不会克隆dom事件 
 * }
 * .data() => {
 *      在获取到的dom对象上 存储一些必要的值 一边后续操作的时将值取出 操作的是 jquery对象 并非操作dom 效率更高效 
 * }
 * 
 * 
 */

//结束于2019/07/31

