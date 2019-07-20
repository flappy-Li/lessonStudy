<template>
    <div class="m-nav">
       <pull-down :navList="navList" />
    </div>
</template>

<script>
import pullDown from './pullDown.vue'
export default {
    data() {
        return {
            navList:[
                {
                    name:"我的美团", 
                    id:'list',
                    list:['我的订单','我的收藏','我想合作','抵用券','账户设置'],       
                    // myOrder:'我的订单',
                    // myCollection:'我的订单',
                    // voucher:'抵用券',
                    // accountSet:'账户设置',
                },
                {
                    name: '手机APP',  
                    id:'app'   
                },
                {
                    name:"商家中心",
                    id:'bd',
                    list:['登陆商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','免费合作美团排队'],
                },
                {
                    name:"美团规则",
                    id:'list',
                    list:['规则中心','规则目录','规则评议院'],
                },
                {
                    name:"网站导航",
                    id:'site',
                    list:[
                        {  
                            titleText:'酒店旅游',
                            id:'hotel',
                            listText:['国际机票','火车票','榛果民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','客栈','青年旅社','度假酒店','别墅','农家院'],
                        },
                        {  
                            titleText:'吃美食',
                            id:'food',
                            listText:['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券'],
                        },
                        {  
                            titleText:'看电影',
                            id:'movie',
                            listText:['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜'],
                        },
                        {  
                            titleText:'手机应用',
                            id:'app',
                            listText:['https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png',
                                    'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
                                    'https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
                                    'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                                    'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'],
                        }
                    ]
                }
            ]
        }
    },
    components:{
        pullDown
    }
}
</script>
<style>

</style>
