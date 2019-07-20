<template>
    <div class="m-header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>
<script>
import searchBar from '@/components/header/searchBar.vue'
import topBar from '@/components/header/topBar.vue'
export default {
    data() {
        return {
           
        }
    },
    components:{
        searchBar,
        topBar
    }
}
</script>
<style lang='scss'>
    @import "@/assets/css/public/header/topBar.scss";
    @import '@/assets/css/public/header/search.scss';
    @import '@/assets/css/public/header/index.scss';
</style>