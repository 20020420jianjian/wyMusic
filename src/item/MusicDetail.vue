<template>
  <img :src="MusicList.al.picUrl" alt="" class="bigimg" />
  <div class="ItemMusicTop">
    <div class="Itemiconleft">
      <svg class="icon" aria-hidden="true" @click="updatatangchu">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="geming">
        <Vue3Marquee>
          <p>{{ MusicList.al.name }}</p></Vue3Marquee
        >
        <span v-for="(m, index) in MusicList.ar" :key="index">{{
          m.name
        }}</span>
      </div>
    </div>
    <div class="Itemiconright">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="MusicCentext" v-show="!lcylist" @click="showgeci">
    <img
      src="@/assets/cizheng.png"
      alt=""
      class="cizheng"
      :class="{ cizheng_active: !isbtnshow }"
    />
    <img src="@/assets/jiaopian.png" alt="" class="jiaopian" />
    <img
      :src="MusicList.al.picUrl"
      alt=""
      class="tupian"
      :class="{ imgrun: !isbtnshow, imgpaused: isbtnshow }"
    />
  </div>
  <div class="getlcylist" ref="musiclcy" v-show="lcylist" @click="showgeci">
    <p
      v-for="item in lyric"
      :key="item"
      :class="{
        geci_active:
          currentTime * 1000 > item.time && currentTime * 1000 < item.pre,
      }"
    >
      {{ item.lrc }}
    </p>
  </div>
  <div>
    <div class="IconList">
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin"></use>
        </svg>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai2"></use>
        </svg>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinlechangpian"></use>
        </svg>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun1"></use>
        </svg>
      </div>
      <div class="iconitem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuanbofang"></use>
        </svg>
      </div>
    </div>

    <!-- <div><hr /></div> -->

    <div class="IconList1">
      <div class="iconitem1">
        <svg class="icon" aria-hidden="true" @click="goplay(-1)">
          <use xlink:href="#icon-shangyishoushangyige"></use>
        </svg>
      </div>
      <div class="iconitem1">
        <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnshow">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="play" v-else>
          <use xlink:href="#icon-zanting"></use>
        </svg>
      </div>
      <div class="iconitem1">
        <svg class="icon" aria-hidden="true" @click="goplay(1)">
          <use xlink:href="#icon-xiayigexiayishou"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      lcylist: false,
    };
  },
  props: ["MusicList", "play", "isbtnshow"],
  watch: {
    currentTime() {
      let p = document.querySelector("p.geci_active");
      console.log([p]);
      // 使用歌词滚动
      // if (p.offsetTop > 300) {
      //   this.$refs.musiclcy.scrollTop = p.offsetTop - 300;
      // }
    },
  },
  components: {
    Vue3Marquee,
  },
  methods: {
    showgeci() {
      this.lcylist = !this.lcylist;
    },
    goplay(num) {
      let index = this.playlistindex + num;
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index == this.playlist.length) {
        index = 0;
      }
      this.updataplaylistindex(index);
    },
    ...mapMutations(["updatatangchu", "updatapaused", "updataplaylistindex"]),
  },
  computed: {
    ...mapState([
      "tangchu",
      "Lyriclist",
      "currentTime",
      "playlist",
      "playlistindex",
    ]),
    lyric() {
      let arr;
      if (this.Lyriclist.lyric) {
        arr = this.Lyriclist.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min, sec, Number(mill), lrc);
          return { time, min, sec, mill, lrc };
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1) {
            item.pre = 0;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      console.log(arr);
      return arr;
    },
  },
  mounted() {},
};
</script>

//
<style lang="less" scoped>
// .geci_active {
//   color: #fff;
//   font-size: 25px;
// }
// .getlcylist {
//   margin-top: 20px;
//   display: flex;
//   width: 100%;
//   height: 450px;
//   // border: 1px solid black;
//   color: #ccc;
//   flex-direction: column;
//   text-align: center;
//   overflow: scroll;
//   p {
//     margin-bottom: 20px;
//   }
// }
// .IconList {
//   position: absolute;
//   top: 490px;
//   height: 1.6rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   // border: 1px solid pink;
//   .iconitem {
//     // border: 1px solid pink;
//     width: 25%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     text-align: center;
//     .icon {
//       width: 50%;
//       margin: auto;
//     }
//   }
// }
// .IconList1 {
//   position: absolute;
//   top: 570px;
//   position: fixed;
//   height: 1.6rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   //   border: 1px solid pink;
//   .iconitem1 {
//     // border: 1px solid pink;
//     width: 33%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     text-align: center;
//     .icon {
//       height: 50%;
//       //   border: 1px solid pink;
//       width: 100%;
//       margin: auto;
//     }
//   }
// }
// .MusicCentext {
//   width: 100%;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   .cizheng {
//     width: 100px;
//     height: 150px;
//     position: absolute;
//     top: -30px;
//     left: 50%;
//     transform-origin: 0 0;
//     transform: rotate(-5deg);
//     transform: all 2s;
//     z-index: 999;
//   }
//   .cizheng_active {
//     width: 100px;
//     height: 150px;
//     position: absolute;
//     top: -30px;
//     left: 50%;
//     transform-origin: 0 0;
//     transform: rotate(6deg);
//     transform: all 2s;
//     z-index: 999;
//   }
// }
// @keyframes rotate_ar {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
// .jiaopian {
//   width: 250px;
//   height: 250px;
//   position: absolute;
//   top: 60px;
// }
// .tupian {
//   animation: rotate_ar 10s linear infinite;
//   width: 160px;
//   height: 160px;
//   position: absolute;
//   top: 105px;
//   z-index: -1;
//   border-radius: 50%;
// }
// .imgrun {
//   animation-play-state: running;
// }
// .imgpaused {
//   animation-play-state: paused;
// }
// .bigimg {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   filter: blur(30px);
//   z-index: -1;
// }
// .geming {
//   position: absolute;
//   left: 15%;
//   width: 35%;
//   // border: 1px solid black;
//   font-size: 18px;
//   color: white;
// }
// span {
//   font-size: 14px;
// }
// .icon {
//   fill: white;
// }
// .ItemMusicTop {
//   width: 100%;
//   height: 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   // border: 1px solid black;
//   .Itemiconleft {
//     // border: 1px solid black;
//     width: 70%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin: 0;
//     margin: 0 10px;
//     font-size: 19px;
//   }
// }
// .Itemiconright {
//   // border: 1px solid black;
//   width: 10%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }
//
</style>

<style lang="less" scoped>
// 触发放大歌词
.geci_active {
  color: #fff;
  font-size: 25px;
}
.getlcylist {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  color: #ccc;
  text-align: center;
  overflow: scroll;
  // border: 1px solid pink;
  p {
    margin-bottom: 20px;
  }
}
.IconList {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 1.6rem;
  width: 100%;
  // border: 1px solid pink;
  .iconitem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .icon {
      width: 50%;
      margin: auto;
    }
  }
}
.IconList1 {
  display: flex;
  justify-content: space-between;
  height: 1.6rem;
  width: 100%;
  margin-top: 50px;
  .iconitem1 {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .icon {
      height: 50%;
      width: 100%;
      margin: auto;
    }
  }
}
.MusicCentext {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .cizheng {
    width: 100px;
    height: 150px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(-5deg);
    transform: all 2s;
    z-index: 999;
  }
  .cizheng_active {
    width: 100px;
    height: 150px;
    top: -30px;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(6deg);
    transform: all 2s;
    z-index: 999;
  }
}
@keyframes rotate_ar {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.jiaopian {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 60px;
}
.tupian {
  animation: rotate_ar 10s linear infinite;
  width: 160px;
  height: 160px;
  position: absolute;
  top: 105px;
  z-index: -1;
  border-radius: 50%;
}
.imgrun {
  animation-play-state: running;
}
.imgpaused {
  animation-play-state: paused;
}
.bigimg {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(30px);
  z-index: -1;
}
.geming {
  position: absolute;
  left: 15%;
  width: 35%;
  // border: 1px solid black;
  font-size: 18px;
  color: white;
}
span {
  font-size: 14px;
}
.icon {
  fill: white;
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
    // border: 1px solid black;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    margin: 0 10px;
    font-size: 19px;
  }
}
.Itemiconright {
  // border: 1px solid black;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
