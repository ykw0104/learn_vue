<template>
  <!-- 
  1. 给登录按钮注册点击事件
  2. 获取表单数据
  3. 请求登录
  4. 处理后端响应结果
    4.1 成功
    4.2 失败
 -->
  <div class="login-container">

    <div class="login-head"></div>

    <!-- 登录表单 -->
    <el-form class="login-form"
             :model="user">
      <!-- 1. 手机号 -->
      <el-form-item>
        <el-input placeholder="请输入手机号"
                  v-model="user.mobile"></el-input>
      </el-form-item>

      <!-- 2. 验证码 -->
      <el-form-item>
        <el-input placeholder="请输入验证码"
                  v-model="user.code"></el-input>
      </el-form-item>

      <!-- 3. 同意协议 -->
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>

      <!-- 4. 登录按钮 -->
      <el-form-item>
        <el-button class="login-bth"
                   type="primary"
                   @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from './utils/request.js'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        // 手机号
        mobile: '13911111111',

        // 验证码
        code: '246810',
      },
      // 是否同意协议
      checked: false,
    }
  },

  methods: {
    onLogin() {
      // 1. 获取表单数据
      const user = this.user

      // 2. 表单验证

      // 3. 验证通过, 提交登录
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user, // 请求体, 提交表单数据
      })
        .then((res) => {
          // 3.1 登录成功
          console.log(res)
        })
        .catch((err) => {
          // 3.2 登录失败
          console.log('登录失败', err)
        })

      // 4. 处理后端响应结果
    },
  },
}
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('./images/login_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  /*   .login-head {
    width: 300px;
    height: 57px;
    margin-bottom: 30px;
    background-color: red;
  } */

  .login-form {
    min-width: 400px;
    padding: 50px;
    background-color: rgba($color: #ffffff, $alpha: 0.5);
    border-radius: 5px;

    .login-bth {
      width: 100%;
    }
  }
}
</style>