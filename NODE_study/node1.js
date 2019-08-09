/**
 *  @param {NODE} 模块化
 *  1. module.exports 和 exports 有什么区别?
 * 一module.exports & exports 开始都是指向同一个引用地址 
 *   module.exports == exports true
 *  导出的永远是 module.exports对象
 * 
 * 
 * 
 * 2.  module.exports, requrie 为什么不声明就能用?
 *     nodeJs的模块是运行在一个函数里的, 
 *    module, exports, requrie都会被当成参数传到那个函数里去,最后这个函数会返回 module.exports
 * 
 */