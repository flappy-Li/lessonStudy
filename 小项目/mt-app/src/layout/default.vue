
<template>
    <div class="layout-default">
        <el-container>
            <el-header style="height:''">
                <top-header/>
            </el-header>
            <el-main>Main</el-main>
            <el-footer style="height:''">Footer</el-footer>
        </el-container>
    </div>    
</template>
<script>
import topHeader from '@/view/topHeader.vue'
export default {
    data() {
        return {

        }
    },
    components:{
        topHeader,
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
