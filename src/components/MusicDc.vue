<template>
  <div class="MusicList">
    <div class="MusicTop">
      <div class="title">华语金曲点唱区</div>
      <div class="button">播放全部</div>
    </div>
    <!-- <div class="musiccontext">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swpie"
        :show-indicators="false"
      >
        <van-swipe-item v-for="(m, index) in musicList" :key="index">
          <router-link :to="{ path: '/itemMusic', query: { id: m.id } }">
            <img :src="m.picUrl" alt="" />

            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
              </svg>
              <span>{{ changCount(m.playCount) }}</span>
            </div>
            <span class="name">
              {{ m.name }}
            </span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div> -->
  </div>
</template>

<script>
// 这是音乐推荐的组件
// 导入推荐音乐的数据
import { getMusicList } from "@/request/api/home";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    async getGedan() {
      let res = await getMusicList();
      //   console.log(res);
      this.musicList = res.data.result;
    },
    changCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGedan();
  },
};
</script>

<style lang="less" scoped>
.MusicList {
  width: 100%;
  height: 50px;
  padding: 10px;
  .MusicTop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    //
    .title {
      font-size: 19px;
      font-weight: 900;
    }
    .button {
      width: 25%;
      height: 15%;
      border-radius: 0.4rem;
      border: 1px solid #ccc;
      font-size: 14px;
      text-align: center;
      line-height: 0.6rem;
    }
  }
}
.musiccontext {
  width: 100%;
  height: 200px;
  .my-swpie {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 150px;
      border-radius: 20px;
      padding: 2.5px;
      position: absolute;
      float: right;
    }
    .playCount {
      padding: 5px;
      display: flex;
      text-align: center;
      justify-content: space-between;
      right: 10%;
      z-index: 999;
      position: absolute;
      float: right;
      color: white;
    }
    .name {
      font-size: 14px;
      position: absolute;
      bottom: 10px;
      margin: 5px;
      //   border: 1px solid black;
    }
  }
  .icon {
    // border: 1px solid pink;
    position: absolute;
    padding: 10px;
    margin-top: 5px;
    fill: white;
  }
}
</style>
