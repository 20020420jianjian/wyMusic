<template>
  <div class="Search">
    <router-link to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </router-link>
    <input
      type="text"
      v-model="name"
      placeholder="陈奕迅"
      @keydown.enter="gethistory"
      @click="click"
    />

    <div class="delete" @click="del" v-show="delete2">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cuowuguanbiquxiao"></use>
      </svg>
    </div>
  </div>
  <div class="history">
    历史
    <span
      v-for="item in historylist"
      :key="item"
      class="sapn"
      @click="search(item)"
    >
      {{ item }}
    </span>
  </div>
  <div class="deletesearch">
    <svg class="icon" aria-hidden="true" v-show="delete1" @click="deleteitem">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>

  <div class="itemList">
    <div class="item" v-for="(item, i) in searchlist" :key="i">
      <div class="itemLeft" @click="updateInex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
      </div>
      <div class="itemLeft">
        <span class="leftSpan">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao2"></use>
          </svg>
        </span>
      </div>
      <div class="zuoping">
        <p>{{ item.name }}</p>
        <span
          v-for="(item1, index) in item.artists"
          :key="index"
          class="zuozhe"
          @click="updateInex(item)"
        >
          {{ item1.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicsearch } from "@/request/api/home";
export default {
  data() {
    return {
      historylist: [],
      name: "",
      delete1: false,
      delete2: false,
      searchlist: "",
    };
  },
  methods: {
    updateInex(item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      this.$store.commit("pushPlayList", item);
      this.$store.commit(
        "updataplaylistindex",
        this.$store.state.playlist.length - 1
      );
    },
    async search(item) {
      //点击历史搜索进行搜索
      let res = await getMusicsearch(item);
      console.log(res);
      this.searchlist = res.data.result.songs;
    },
    del() {
      //删除input框里面的值
      this.name = "";
      this.delete2 = false;
    },
    async gethistory() {
      if (this.name != "") {
        this.historylist.push(this.name); //将输入的历史记录添加到第一个
        this.historylist = [...new Set(this.historylist)]; //利用set函数对数组进行去重
        this.delete2 = true; //当input框有值时候，删除图标出现
        let res = await getMusicsearch(this.name);
        console.log(res);
        this.searchlist = res.data.result.songs;
        sessionStorage.setItem("historylist", JSON.stringify(this.historylist)); //将历史记录数据存储到浏览器保证刷新数据不丢失
      }
      if (this.historylist.length != 0) {
        this.delete1 = true;
      }
    },
    deleteitem() {
      sessionStorage.removeItem("historylist");
      this.historylist = [];
      this.delete1 = false;
      alert("确认清空全部历史记录");
    },
  },
  mounted() {
    this.historylist = JSON.parse(sessionStorage.getItem("historylist"))
      ? JSON.parse(sessionStorage.getItem("historylist"))
      : [];
  },
};
</script>

<style lang="less" scoped>
.zuozhe {
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: #ccc;
  position: absolute;
  float: left;
  margin-left: 10px;
}
p {
  margin-left: 10px;
}
.zuoping {
  font-weight: 900;
  width: 60%;
  height: 42px;
  //   border: 1px solid black;
  position: absolute;
  float: left;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.itemList {
  border-radius: 20px;
  margin-top: 100px;
  width: 100%;
  height: 580px;
  //   background-color: white;
  //   border: 1px solid black;
  padding: 0 10px;

  .item {
    margin-bottom: 10px;
    padding: 0 10px 0 0;
    // margin: 8px;
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

.Search {
  padding: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  //   border: 1px solid black;
  input {
    margin-left: 10px;
    border: none;
    // border-bottom: 1px solid black;
    width: 95%;
  }
}
.history {
  padding: 10px;
  width: 90%;
  height: 100px;
  align-items: center;
  position: absolute;
  //   border: 1px solid black;
}
.deletesearch {
  float: right;
  margin-top: 30px;
  margin-left: 90%;
  align-items: center;
  position: absolute;
  opacity: 0.5;
  //   border: 1px solid black;
  float: right;
}
.sapn {
  padding: 5px;
  margin-left: 10px;
  display: inline-block;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  //   border: 1px solid black;
  background-color: #f4f2f3;
  font-size: 12px;
}
</style>
