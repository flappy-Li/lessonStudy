  // 1. 什么是jQ
        /*
        *   1. jq 就是一堆js函数库,进行了封装. mvm 数据结构
        */

    // 2. 为什么要用jq
        /*
        *   1. jQuery有良好的设计,解决了原生DOM接口名字复杂的问题, 方便使用.
        *   2. jQuery中有大量的可复用的函数,还有常年累计的插件库,简化JavaScript的开发.
        *   3. jQuery兼容性问题得到解决.
        *   4. jQuery虽说已经过时,jQuery的组件化,工程化的思想有着重要意义,很多公司还在用jQuery做一些维护开发.
        */

    // 3. jQuery使用 - 起步
        /*
        *   $ == jQuery
        *  
        *   获取DOM
        *   $('符合 css 选择器的方式 ')
        *  
        * 
        *   实例方法
        *   例:$('div').css({'width:100, height:100, background-color:red'});
        * 
        *   //参数规则
        *   1 $('') --> css selector;
        *       例: jquery unique selector
        *           $(.wrapper ul li:eq()) 
        *       例: 属性选择器
        *       $('wrapper li[data='Duyi']') 
        *   2 $('') --> null undefined '' 容错机制
        *   
        * 
        * 
        */  
    //4. jQuery使用 - 精髓 
        /*
         * 1. 选择元素 {
                1) 
            }
        * 2. 循环操作
        * 3. 链式调用 {
                返回的对象？
                b包 封闭作用域
            }
        */
//
//
//结束于 => 2019/03/01