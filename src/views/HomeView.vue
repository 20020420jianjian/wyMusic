<template>
  <div>
    <TopNav />
    <SwipeTop />
    <IconList />
    <MusicList />
    <MusicDc />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from "@/components/TopNav.vue";
import SwipeTop from "@/components/SwipeTop.vue";
import IconList from "@/components/IconList.vue";
import MusicList from "@/components/MusicList.vue";
import MusicDc from "@/components/MusicDc.vue";
export default {
  name: "HomeView",
  components: { TopNav, SwipeTop, IconList, MusicList, MusicDc },
};
</script>
