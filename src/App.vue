<template>
  <div>
    <router-view />
    <ItemFooter v-show="$store.state.isFooter" />
  </div>
</template>
<script>
import ItemFooter from "@/item/ItemFooter.vue";
export default {
  components: {
    ItemFooter,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
</style>
