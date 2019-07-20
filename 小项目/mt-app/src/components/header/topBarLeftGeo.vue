<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location icon"></i>
            <span>济南</span>
            <router-link class="changeCity" :to="{name: 'changCity'}">
                切换城市
            </router-link>
            <span class="district">
                [
                    <a href="#">长清区</a>
                    <a href="#">齐河</a>
                    <a href="#">章丘区</a>
                ]
            </span>
        </div>
        <div class="m-user">
             <router-link class="login" :to="{name: 'login'}">
                立即登陆
            </router-link>
             <router-link class="register" :to="{name: 'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
