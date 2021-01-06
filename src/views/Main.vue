<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tab></common-tab>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/components/common/Header.vue";
import CommonAside from "@/components/common/Aside.vue";
import CommonTab from "@/components/common/Tab.vue";
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab,
  },
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-header {
  background-color: #333;
}
</style>
