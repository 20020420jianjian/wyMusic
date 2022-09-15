import { createStore } from "vuex";

import { getMusiclyric } from "@/request/api/home";
import { getlogin } from "@/request/api/home";
export default createStore({
  state: {
    playlist: [
      {
        al: {
          id: 97225639,
          name: "うっせぇわ",
          pic: 109951165408514110,
          picUrl:
            "https://p1.music.126.net/CR6WLg4wTGgWyUN9Y2ejUg==/109951165408514104.jpg",
          pic_str: "109951165408514104",
        },
        id: 1489254523,
      },
    ],
    playlistindex: 0, //歌曲的坐标
    isbtnshow: true, //暂停按钮
    tangchu: false, //歌曲详情页
    Lyriclist: {}, //歌词
    currentTime: 0, //播放歌曲的时间
    isLogin: false, //判断是否登录
    isFooter: true,
    username: "admin",
    password: "123456",
    token: "",
    user: {},
    // isLogin: false, //判断是否正确
  },
  getters: {},
  mutations: {
    //修改暂停的值
    updatapaused(state, value) {
      state.isbtnshow = value;
    },
    // 获取歌曲的属性
    updataMusicList(state, value) {
      state.playlist = value;
      // console.log(state.playlist);
    },
    // 获取搜索列表的歌曲push到数组后面一位
    pushPlayList(state, value) {
      state.playlist.push(value);
    },
    // 修改歌曲的下标来切换歌曲
    updataplaylistindex(state, value) {
      state.playlistindex = value;
    },
    //切换弹出
    updatatangchu(state, value) {
      state.tangchu = !state.tangchu;
    },
    // 获取歌词
    getLyriclist(state, value) {
      state.Lyriclist = value;
    },
    // 获取歌词时间
    getcurrentTime(state, value) {
      state.currentTime = value;
      // console.log(state.currentTime);
    },
    //获取登录结果
    updataisLogin(state, value) {
      state.isLogin = true;
      // console.log(state.isLogin);
    },
    //设置是否登录
    getrestoken(state, value) {
      state.token = value;
      localStorage.setItem("token", state.token);
    },
    getuser(state, value) {
      state.user = value;
      console.log(state.user);
      localStorage.setItem("user", JSON.stringify(value));
    },
  },
  actions: {
    async getLyric(context, value) {
      const res = await getMusiclyric(value);
      // console.log(res);
      context.commit("getLyriclist", res.data.lrc);
    },
    //获取网易云接口手机数据
    async getmusicphone(context, value) {
      const res = await getlogin(value);
      return res;
    },
    //假登录
    // login(context, value) {
    //   console.log("phone" + value.phone + "password" + value.password);
    //   if (
    //     value.phone === context.state.username &&
    //     value.password === context.state.password
    //   ) {
    //     context.state.isLogin = true;
    //   } else {
    //     context.state.isLogin = false;
    //   }
    // },
    // logout(context) {
    //   context.state.isLogin = false;
    // },
  },
  modules: {},
});
