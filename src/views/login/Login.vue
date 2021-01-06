<template>
    <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button class="reset" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    var username = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
          if (value.length < 3) {
            callback(new Error("账号长度必须大于3"));
          } else {
            callback();
          }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post( "/login", this.ruleForm).then(resp => {
              if(resp.data.code == 20000) {
                  this.$message({
                      message: resp.data.data.message,
                      type: 'success'
                  });
                  this.$router.push({name: 'home'});
              }else{
                   this.$message({
                        message: resp.data.data.message,
                        type: 'error'
                   });
              }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
    width: 425px;
    margin: 0 auto;
    margin-bottom: 20px
}

.reset{
    float: right;
}
.login{
    float: left;
}

</style>

<style>
#app{
    display: flex;
    align-items: center
}
</style>
