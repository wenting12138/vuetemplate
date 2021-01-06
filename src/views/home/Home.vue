<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">
        <div class="user">
          <img :src="userImg" alt="">
          <div class="user-info">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">

        </div>
      </el-card>
      <el-card shadow="hover" style="height: 536px; margin-top: 20px">
        鼠标点击
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon"></i>
          <div class="detail">
            <p class="numss">￥ 1234</p>
            <p class="txt">今日支付订单</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height: 280px">

        </div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height: 260px">

          </div>
        </el-card>
        <el-card shadow="hover">
          <div style="height: 260px">

          </div>
        </el-card>
      </div>
    </el-col>

  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: ""
    };
  },
  mounted() {
    this.$http.get("/home/getData").then(resp => {
      console.log(resp);
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
  }
  .graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .el-card {
      width: 48%;
    }
  }
}
</style>
