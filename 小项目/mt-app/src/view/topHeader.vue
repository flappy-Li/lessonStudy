<template>
    <div class="header">
        <el-row>
            <search-bar/>
        </el-row>
        <el-row>
            <top-bar/>
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
<style>
    .header {

    }


</style>