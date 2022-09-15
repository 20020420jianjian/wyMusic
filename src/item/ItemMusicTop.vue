<template>
  <!-- 设置头部样式 -->
  <div class="ItemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="Itemiconleft">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </router-link>
      <span> 歌单 </span>
    </div>

    <div class="Itemiconright">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
  </div>
  <!-- 设置中间样式 -->
  <div class="ItemMusicContext">
    <div class="leftimg">
      <img :src="playlist.coverImgUrl" alt="" class="lefttu" />
    </div>
    <div class="rightmessage">
      <li>{{ playlist.name }}</li>

      <div class="duiqi">
        <div class="touxiang">
          <img :src="playlist.creator.avatarUrl" alt="" class="righttu" />
        </div>
        <span class="nickname">{{ playlist.creator.nickname }}</span>
      </div>

      <li class="hide">{{ playlist.description }}</li>
    </div>
  </div>
  <!-- 设置icon样式 -->
  <div class="IconList">
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun1"></use>
      </svg>
      <span>评论</span>
    </div>
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>分享</span>
    </div>
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai"></use>
      </svg>
      <span>下载</span>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem().playlist
      ).creator;
    }
  },
  props: ["playlist"],
};
</script>

<style lang="less" scoped>
.duiqi {
  width: 180px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  // border: 1px solid black;
  .nickname {
    margin-top: 25px;
    font-size: 16px;
    color: #ccc;
  }
}
.icon {
  fill: white;
}
.hide {
  color: #ccc;
  margin-top: 15px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ItemMusicTop {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  // border: 1px solid black;
  .Itemiconleft {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    color: white;
    margin: 0 10px;
    font-size: 19px;
  }
}

.bgimg {
  width: 100%;
  height: 500px;
  position: fixed;
  z-index: -1;
  filter: blur(30px);
}
.Itemiconright {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.ItemMusicContext {
  width: 100%;
  height: 180px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid black;
  .leftimg {
    // margin-bottom: 35px;
    width: 45%;
    height: 150px;

    // border: 1px solid black;
    border-radius: 15px;
    .lefttu {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
  .rightmessage {
    padding: 10px;
    // margin-bottom: 35px;
    width: 55%;
    height: 150px;
    // border: 1px solid black;
  }
  .touxiang {
    margin: -10px;
    margin-top: 15px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    color: #ccc;
    font-size: 14px;
    .righttu {
      width: 100%;
      height: 1005;
      border-radius: 50px;
      margin-right: 10px;
    }
  }
}
.IconList {
  height: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .iconitem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    .icon {
      width: 75%;
      margin: auto;
    }
  }
}
li {
  list-style: none;
  color: white;
}
</style>
