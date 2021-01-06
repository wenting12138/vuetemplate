<template>
  <header>
      <div class="l-content">
        <el-button type="primary" @click="collapseMenu" icon="el-icon-menu" size="mini"></el-button>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link my-dropdown-link">
                <el-avatar :size="userImgSize" :src="userImg"></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            userImg: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            userImgSize: "large"
        }
    },
    computed: {
        ...mapState({
            current: state => state.tab.currentMenu
        })
    },
    methods: {
        collapseMenu() {
            // 左边导航栏进行折叠
            this.$store.commit("isCollapseMenu")
        },
        logout(){
            this.$router.push({name: 'login'});
        }
    },
};
</script>

<style lang="scss" scoped>
header{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content:space-between;
}
.my-dropdown-link{
    cursor: pointer;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px
    }
}
</style>

<style lang="scss">
.el-breadcrumb__item .el-breadcrumb__inner{
    color: #666;
    font-weight: normal
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #f4f4f4;
}
</style>

