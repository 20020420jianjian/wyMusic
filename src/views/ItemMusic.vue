<template>
  <div>
    <ItemMusicTop :playlist="this.playlist" />
    <ItemMusiclist
      :itemlist="this.itemlist"
      :subscribedCoun="this.playlist.subscribedCount"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
// 导入歌单list的数据
import { getMusicListitem } from "@/request/api/home";
import { getitem } from "@/request/api/home";
import { onMounted } from "@vue/runtime-core";
// 导入歌单头部页面
import ItemMusicTop from "@/item/ItemMusicTop.vue";
// 导入歌单歌曲页面
import ItemMusiclist from "@/item/ItemMusiclist.vue";
export default {
  data() {
    return {
      playlist: [],
      itemlist: [],
    };
  },
  methods: {
    async getid() {
      let id = useRoute().query.id;
      console.log(id);
      //获取歌单id
      let res = await getMusicListitem(id);
      console.log(res);
      this.playlist = res.data.playlist;
      // 获取歌单详情
      let result = await getitem(id);
      console.log(result);
      this.itemlist = result.data.songs;
      sessionStorage.setItem("itemDetail", JSON.stringify(this.playlist));
    },
  },
  mounted() {
    this.getid();
  },
  components: {
    ItemMusicTop,
    ItemMusiclist,
  },
  //   setup() {
  //     onMounted(async () => {
  //       let id = useRoute().query.id;
  //       console.log(id);
  //       let res = await getMusicListitem(id);
  //       console.log(res);
  //     });
  //   },
};
</script>

<style></style>
