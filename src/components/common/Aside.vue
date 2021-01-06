<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollage"
  >
    <el-menu-item :index="item.path" v-for="item in noChilren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      index="index"
      v-for="(item, index) in hasChilren"
      :key="index"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subitem.path"
          v-for="(subitem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subitem)"
          >{{ subitem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/video",
          label: "视频管理",
          name: "video",
          icon: "video-play",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
        },
        {
          label: "其他管理",

          icon: "user",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChilren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    hasChilren() {
      return this.asideMenu.filter((item) => item.children);
    },
    isCollage(){
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
      clickMenu(item) {
        this.$router.push({name: item.name})
        this.$store.commit("selectMenu", item)
      }
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none
}
</style>
