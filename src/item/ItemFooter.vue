<template>
  <div class="ItemFooter">
    <div class="ItemFooterleft">
      <div class="chanpian">
        <img :src="playlist[playlistindex].al.picUrl" alt="" />
      </div>
      <div class="duiqi" @click="tangchu1">
        <p>{{ playlist[playlistindex].al.name }}</p>
        <span class="span">祝你每天好心情</span>
      </div>
      <div class="ItemFooterright">
        <svg class="icon" aria-hidden="true" v-if="isbtnshow" @click="play">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-weibiaoti--"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2"></use>
        </svg>
      </div>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistindex].id}.mp3`"
      ></audio>
      <van-popup
        v-model:show="tangchu"
        position="bottom"
        :style="{ height: '100%', width: '100% ' }"
      >
        <MusicDetail
          :MusicList="playlist[playlistindex]"
          :play="play"
          :isbtnshow="isbtnshow"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import MusicDetail from "@/item/MusicDetail.vue";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  computed: {
    ...mapState(["playlist", "playlistindex", "isbtnshow", "tangchu"]),
  },
  updated() {
    this.$store.dispatch("getLyric", this.playlist[this.playlistindex].id);
  },
  mounted() {
    this.updataTime();
    this.$store.dispatch("getLyric", this.playlist[this.playlistindex].id);
  },
  methods: {
    ...mapMutations(["updatapaused", "updatatangchu", "getcurrentTime"]),
    // 播放时候改变图标
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updatapaused(false);
        this.updataTime();
      } else {
        this.$refs.audio.pause();
        this.updatapaused(true);
        clearInterval(this.interVal);
      }
    },
    tangchu1() {
      this.updatatangchu();
    },
    updataTime() {
      this.interVal = setInterval(() => {
        this.getcurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
  },
  //   监听是否发生改变如果改变，自动播放
  watch: {
    playlistindex() {
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updatapaused(false);
      }
    },
    playlist() {
      this.$refs.audio.autoplay = true;
      this.updatapaused(false);
    },
  },
  components: {
    MusicDetail,
  },
};
</script>

<style lang="less" scoped>
.duiqi {
  margin-right: 55px;
}
.ItemFooterright {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  //   border: 1px solid black;
  align-items: center;
}
.ItemFooter {
  width: 100%;
  height: 64px;
  background-color: white;
  border-top: 1px solid #999;
  position: fixed;
  bottom: 0;
  .ItemFooterleft {
    margin-left: 10px;
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    align-items: center;
    .chanpian {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      //   border: 1px solid black;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    }
  }
}
</style>
>
