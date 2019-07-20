<template>
    <div class="search-panel">
       <el-row class="m-header-searchbar">
            <el-col :span='3' class="left">
                <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="">
            </el-col>
            <el-col :span='15' class="center">
                <div class="wrapper">
                    <el-input 
                        v-model="searchcValue" 
                        placeholder="搜索商家和地点"
                        @focus="focus"
                        @blur="blur"
                    ></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="ishotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="item in searchcValueList" :key="item.index">
                            <router-link to="/s">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="searchList">
                        <dd v-for="item in searchDataList" :key="item.index">
                            <router-link to="/s">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a v-for="item in suggestList" :key="item.index">{{item}}</a>
                </p>
            </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
        searchcValue:'',
        isFocus:false,
        searchcValueList:['济南失恋博物馆','佰烧海鲜烤肉自助','喜茶','韩盛自助料理'],
        searchDataList:['火锅','火锅自助餐','火锅美食'],
        suggestList:['济南失恋博物馆','佰烧海鲜烤肉自助','喜茶','韩盛自助料理','海底捞火锅'] 
    }
  },
  computed:{
    ishotPlace() {
        return this.isFocus && !this.searchcValue;
    },
    searchList(){
        return this.isFocus && this.searchcValue;
    }
  },
  methods:{
    focus() {
        this.isFocus = true;
    },
    blur() {
        setTimeout( () => {
            this.isFocus = false;
        }, 200) 
        
    }
  }
};
</script>