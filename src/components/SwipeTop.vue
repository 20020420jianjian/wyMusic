<template>
  <div id="swpietop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in this.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 这是轮播图的组件
import axios from "axios";
import { getBanner } from "@/request/api/home.js";
import { onMounted, reactive } from "vue";
//接收一个普通对象然后返回该普通对象的响应式代理。
// reactive 可以将需要导出的数据都包裹在一个对象中，而不是单独存在
export default {
  name: "SwipeTop",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async getBanne() {
      let res = await getBanner();
      // console.log(res);
      this.images = res.data.banners;
    },
  },
  mounted() {
    this.getBanne();
  },
  // 下面是vue3的写法,
  // setup() {
  // const state = reactive({
  //   images: [

  //   ],
  // });
  // onMounted(async () => {
  //   // axios.get("http://localhost:3000/banner?type=2").then((res) => {
  //   //   state.images = res.data.banners;
  //   // });
  //   let res = await getBanner();
  //   state.images = res.data.banners;
  //   // console.log(res);
  // });
  // return { state };
  // },
};
</script>

<style lang="less" scoped>
#swpietop {
  .van-swipe {
    width: 100%;
    height: 4rem;
    .van-swipe-item {
      padding: 0 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    /deep/.van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>
