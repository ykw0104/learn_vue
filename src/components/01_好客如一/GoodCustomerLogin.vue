<template>
  <div id="wrap">
    <img class="logo" src="./images/logo.png" alt="">

    <p>
      <label for="username">账号</label>
      <input type="text" id="username" placeholder="请输入用户名">
      <span class="tips">请输入正确的用户名</span>
    </p>

    <p>
      <label for="password">密码</label>
      <input type="password" id="password" placeholder="请输入用密码">
      <span class="tips">请输入正确的密码</span>
    </p>

    <div class="login-button">
      <button @click="$router.push('/haoke01/hk01_home')">登录</button>
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodCustomerLogin',
}
</script>
<style lang="scss" scoped>
#wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: #0a0909 url(./images/index_bg.jpg) no-repeat center;
  background-size: cover;

  img.logo {
    height: 300px;
    width: 300px;
  }

  > p {
    position: relative;
    display: flex;
    width: 350px;
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 15px;
    background-color: #fff;

    > label {
      width: 70px;
      text-align: center;
      border-radius: 30px;
      background-color: #ff8400;
      color: #fff;
    }

    > input {
      width: 100%;
      padding-left: 10px;
      border: none;
      border-radius: 0 30px 30px 0;
      color: #b2b2b2;

      &::placeholder {
        color: #ccc;
      }
    }

    > span.tips {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 12px;
      color: red;
    }
  }

  .login-button {
    > button {
      width: 60px;
      height: 30px;
      border: none;
      border-radius: 15px;
      margin: 0 10px;
      background-color: #ff8400;
      color: #fff;
      cursor: pointer;

      &:nth-child(2) {
        background-color: #cc2e2a;
      }
    }
  }
}
</style>