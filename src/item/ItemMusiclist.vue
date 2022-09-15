<template>
  <div class="ItemMusiclist">
    <div class="itemtop">
      <div class="topleft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="wenzi">
          <span class="jiachu">播放全部</span>
          <span class="yanse">(共{{ itemlist.length }}首)</span>
        </div>
      </div>
      <div class="topright">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao1"></use>
        </svg> -->
        <span class="juzhon">收藏（{{ changCount(subscribedCoun) }}）</span>
      </div>
    </div>
    <!-- 下面list的左边样式 -->
    <div class="itemList">
      <div class="item" v-for="(item, i) in itemlist" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
        </div>
        <div class="itemLeft">
          <span class="leftSpan">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liebiao2"></use>
            </svg>
          </span>
        </div>
        <div class="zuoping" @click="playMusic(i)">
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.ar" :key="index" class="zuozhe">
            {{ item1.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// 这是播放列表组件
export default {
  setup(props) {
    console.log(props);
  },
  props: ["itemlist", "subscribedCoun"],
  methods: {
    playMusic(i) {
      this.updataMusicList(this.itemlist);
      this.updataplaylistindex(i);
    },
    changCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
    ...mapMutations(["updataMusicList", "updataplaylistindex"]),
  },
};
</script>

<style lang="less" scoped>
icon {
  fill: white;
}
.zuozhe {
  width: 25%;
  // flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: #ccc;
  margin-left: 10px;
  // border: 1px solid black;
}
p {
  margin-left: 10px;
}
.zuoping {
  width: 60%;
  height: 42px;
  // border: 1px solid black;
  position: absolute;
  float: left;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.itemList {
  margin-top: 10px;
  width: 100%;
  height: 580px;
  background-color: white;
  padding: 0 10px;
  .item {
    margin: 8px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 43px;
    // border: 1px solid black;
  }
  .itemLeft {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    // border: 1px solid black;
    .leftSpan {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
icon {
  fill: white;
  color: white;
}
.ItemMusiclist {
  margin-top: 20px;
  width: 100%;
  height: 550px;
  background-color: white;
  padding: 0 10px;
  border-radius: 20px;
  //   border: 1px solid black;
  .itemtop {
    widows: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid black;
    .topleft {
      align-items: center;
      width: 46%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
.topright {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  border: 1px solid red;
  background-color: red;
  width: 35%;
  height: 85%;
  color: white;
}
.wenzi {
  display: flex;
  justify-content: space-between;
}
.jiachu {
  font-size: 18px;
  font-weight: 900;
}
.yanse {
  font-size: 8px;
  color: #ccc;
  margin-top: 8px;
}
.juzhon {
  font-size: 14px;
}
</style>
