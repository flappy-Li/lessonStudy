
<template>
    <div id="dafult_pate">
        <el-container>
            <el-header>
                <top-header/>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
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

<style>

</style>
