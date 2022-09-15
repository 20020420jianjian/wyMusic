<template>
  <div class="usertop">
    <div class="duiqi">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </router-link>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>

    <div class="backimg">
      <img :src="user?.profile.backgroundUrl" alt="" />
    </div>
  </div>
  <div class="usertouxiang">
    <img :src="user?.profile.avatarUrl" alt="" />
    <span class="name">{{ user?.profile.nickname }}</span>
    <div class="like">
      <span>{{ user?.profile.follows }} 关注</span>
      <span>{{ user?.profile.followeds }} 粉丝</span>
      <span>{{ user?.profile.follows != 1 ? "男" : "女" }}</span>
    </div>
    <div class="zhuye">
      <span>完善主页，发现更多音乐好品味</span>
      <span class="you">去填写</span>
    </div>
  </div>
  <div class="list">
    <span>主页</span>
    <span>动态</span>
    <span>博客</span>
  </div>
  <div class="message">
    <span class="zuo1">基本信息</span>
    <span class="you1">村民证</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      gender: "",
      user: {},
    };
  },
  methods: {},
  computed: {
    // ...mapState(["user"]),
  },
  beforeMount() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  },
};
</script>

<style lang="less" scoped>
.icon {
  fill: white;
}
.usertop {
  // border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  .duiqi {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
}
.backimg {
  z-index: -1;
  width: 100%;
  height: 450px;
  position: absolute;
  // border: 1px solid black;
  img {
    width: 100%;
    margin: 50px 0;
    height: 450px;
    filter: blur(15px);
  }
}
.usertouxiang {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 250px;
  border: 1px solid rgb(232, 232, 235);
  border-radius: 15px;
  background-color: white;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .name {
    font-size: 18px;
    font-weight: 600;
    // padding-bottom: 70px;
  }
  .like {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    padding: 0 40px;
  }
  .zhuye {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    // border: 1px solid black;
    .you {
      border: 1px solid #ccc;
      border-radius: 15px;
      color: red;
      padding: 5px;
    }
  }
}

.list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  margin-top: 20px;
  font-weight: 600;
}

.message {
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  height: 450px;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgb(232, 232, 235);
  border-radius: 15px;
  .zuo1 {
    font-size: 18px;
    font-weight: 600;
  }
  .you1 {
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #ccc;
  }
}
</style>
