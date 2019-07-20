<template>
    <div class="m-header-topba">
        <el-row>
            <el-col :span="10">
                <top-bar-geo />
            </el-col>
            <el-col :span="14">
                <top-bar-nav />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import topBarGeo from './topBarLeftGeo.vue';
import topBarNav from './topBarRightNav.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            topBarGeo,
            topBarNav
        }
        
    }
</script>