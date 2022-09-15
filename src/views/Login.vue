<template>
  <div class="big-box">
    <div class="box">
      <h2>Login</h2>
      <div class="input-box">
        <label>手机账号</label>
        <input type="text" placeholder="胡桃" v-model="phone" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input
          type="password"
          placeholder=""
          v-model="password"
          @keydown.enter="login"
        />
      </div>
      <div class="btn-box">
        <a href="#">忘记密码</a>
        <div>
          <button @click="login1">登录</button>
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getloginuser } from "@/request/api/home";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    //接口登录 
    login: async function () {
      let res = await this.$store.dispatch("getmusicphone", {
        phone: this.phone,
        password: this.password,
      });
      // 获取state里的登录数据
      console.log(res);
      if (res.data.code == 200) {
        this.$store.commit("updataisLogin", true);
        this.$store.commit("getrestoken", res.data.token);
        // let result = await getloginuser(res.data.account.id);
        // console.log(result);
        this.$store.commit("getuser", res.data);
        this.$toast("登录成功");
        this.$router.push("/infoUser");
      } else {
        this.$toast("手机号或者密码错误");
      }
    },
    // login1() {
    //   // 假登录
    //   this.$store.dispatch("login", {
    //     phone: this.phone,
    //     password: this.password,
    //   });

    //   if (isSucceed) {
    // this.$toast("登录成功");
    // this.$router.push("/infoUser");
    //   } else {
    //     this.$toast({
    //       message: "手机号或者密码错误",
    //       position: "top",
    //     });
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.big-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/leijun.png);
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: black;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 65%;
  border: 1px solid rgb(255, 255, 255, 0.5);
  // backdrop-filter: blur(6px);
  border-radius: 15px;
}
.box > h2 {
  color: rgb(255, 255, 2515, 0.9);
  margin-bottom: 50px;
}
.box .input-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.box .input-box > label {
  margin-top: 4px;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255, 0.9);
}
.input-box input {
  width: 250px;
  height: 34px;
  color: black(255, 255, 255, 0.9);
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  transition: 0.2s;
  padding: 0 10px;
  outline: none;
}
.input-box input :focus {
  border: 1px solid rgb(255, 255, 255, 0.8);
}
.box a {
  display: flex;
  width: 250px;
  flex-direction: column;
  color: white;
  margin-top: 10px;
  font-size: 14px;
  text-align: end;
}
.box .btn-box > div {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.box .btn-box > div > button {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 120px;
  height: 34px;
  align-items: center;
  color: rgb(255, 255, 255, 0.9);
  border-radius: 3px;
  border: 1px solid rgb(67, 68, 141, 0.3); /* 这里是对两个按钮设置的背景颜色修改不同图片时候可以按照你的喜好插入 */
  background: rgb(67, 68, 141, 0.3);
  /* transition: 0.2s; */
}
/* 这里是鼠标移动上去的变色同理按你的喜好设置 */
.box .btn-box > div > button:hover {
  border: 1px solid rgb(43, 52, 92, 0.3);
  background: rgb(43, 52, 92, 0.9);
}
.box .btn-box > div > button:nth-child(2) {
  margin-left: 20px;
}
</style>
