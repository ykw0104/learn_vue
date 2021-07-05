<template>
  <!-- 登录步骤
  1. 给登录按钮注册点击事件
  2. 获取表单数据
  3. 请求登录
  4. 处理后端响应结果
    4.1 成功
    4.2 失败
 -->
  <div class="login-container">

    <div class="login-head"></div>

    <!-- A. 配置 Form 表单验证 
        1. 给 el-form 绑定model 为表单数据对象 :model="user"
        2. 给 el-form-item 绑定prop属性  prop="mobile"  prop="code"
        3. 给 el-form 配置验证规则 :rules="loginRules"

        B. 手动触发 表单验证
        1. 给 el-form 设置 ref="loginForm"
        2. 通过 ref 获取 el-form, 调用$refs["loginForm"].validate方法进行验证
     -->
    <!-- 登录表单 -->
    <el-form class="login-form"
             ref="loginForm"
             :model="user"
             :rules="loginRules">
      <!-- 1. 手机号 -->
      <el-form-item prop="mobile">
        <el-input placeholder="请输入手机号"
                  v-model="user.mobile"></el-input>
      </el-form-item>

      <!-- 2. 验证码 -->
      <el-form-item prop="code">
        <el-input placeholder="请输入验证码"
                  v-model="user.code"></el-input>
      </el-form-item>

      <!-- 3. 同意协议 -->
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>

      <!-- 4. 登录按钮 -->
      <el-form-item>
        <el-button class="login-bth"
                   type="primary"
                   :loading="loginLoading"
                   @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userLogin } from './utils/user.js'
import { ElMessage } from 'element-plus'

export default {
  name: 'TaoTiaoLogin',
  data() {
    return {
      user: {
        // 手机号
        mobile: '13911111111',

        // 验证码
        code: '246810',

        // 是否同意协议
        agree: false,
      },
      // 登录按钮是否加载
      loginLoading: false,
      // 表单验证规则配置, trigger的值: change 或 blur
      loginRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'change' },
          // 使用正则验证
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号码格式不正确',
            trigger: 'change',
          },
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'change' },
          // 使用正则验证
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确',
            trigger: 'change',
          },
        ],
        agree: [
          {
            // 自动义校验
            // 通过: callback(); 未通过: callback(new Error('xxx'))
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('用户协议未勾选')) // 错误消息写这里
              }
            },
            trigger: 'change',
          },
        ],
      },
    }
  },

  methods: {
    onLogin() {
      /* 1. 获取表单数据 */
      // const user = this.user

      /* 2. 表单验证 */
      // valid: true 通过, false 不通过
      this.$refs['loginForm'].validate((valid) => {
        if (!valid) return // 表单验证失败, 停止提交

        // 3. 验证通过, 请求登录
        this.login()
      })

      /* 4. 处理后端响应结果 */
    },

    login() {
      /* 3. 验证通过, 提交登录 */
      this.loginLoading = true // 登录按钮显示加载
      userLogin(this.user) // 调用user.js的userLogin方法
        .then((res) => {
          /*  3.1 登录成功 */
          // 提示成功
          ElMessage.success({
            message: '登录成功',
            type: 'success',
            duration: 1000,
          })

          // 登录按钮取消加载
          this.loginLoading = false

          // 跳转到首页
          this.$router.push('/toutiao/tt_bg')
        })
        .catch((err) => {
          /* 3.2 登录失败 */
          console.log(err)
          // 失败提示
          ElMessage.error('登录失败')
          // 登录按钮取消加载
          this.loginLoading = false
        })
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