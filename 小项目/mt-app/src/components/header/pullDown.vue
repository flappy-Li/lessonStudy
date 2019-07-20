<template>
    <ul class="nav">
        <li 
            v-for="item in navList" 
            v-bind:key="item.name" 
            class="list"
            :class="[item.id === 'site' ? 'site' : item.id === 'bd' ? 'bd' : '']"
        >
            <router-link to="/">{{item.name}}</router-link>
            <!-- 网站导航 -->
            <div 
                class="subContainer"
                v-if="item.id === 'site'"                
            >
            <!-- :class="[item.id === 'site' ? 'subContainer' : item.id === 'bd' ? 'bd' : '']" -->
                <dl 
                    v-for="value in item.list" 
                    :key="value.titleText"
                    :class="[value.id === 'hotel' ? 'hotel' : value.id === 'food' ? 'food' : value.id === 'movie' ? 'movie' : 'app']"
                >
                    <dt>
                        {{value.titleText}}
                    </dt>
                    <dd v-for="text in value.listText" :key="text.index">
                        <router-link to="/" v-if="value.id !== 'app'">{{text}}</router-link>
                         <router-link to="/" v-else>
                            <img :src="`${text}`" v-if="value.id == 'app' "/>
                        </router-link>
                    </dd>
                </dl>
            </div>
            <!-- 其他导航 -->
            <dl 
                v-else
                class="list"
                :class="[item.id === 'subContainer' ? 'subContainer' : item.id === 'bd' ? 'bd' : '']"
            >   
                <dd v-for="value in item.list" :key="value.index" >
                    <router-link to="/">{{value}}</router-link>
                </dd>      
            </dl>
        </li>
    </ul>
</template>

<script>
export default {
    props:['navList']

}
</script>

<style>

</style>
