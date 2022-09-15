<template>
  <div class="IconList">
    <div class="iconitem">
      <img src="@/assets/today.png" alt="" />
      <span>每日推荐</span>
    </div>
    <div class="iconitem">
      <img src="@/assets/fm.png" alt="" />
      <span>私人FM</span>
    </div>
    <div class="iconitem">
      <img src="@/assets/gedan.png" alt="" />
      <span>歌单</span>
    </div>
    <div class="iconitem">
      <img src="@/assets/paihang.png" alt="" />
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
// 这是首页iconlist的组件
export default {
  name: "IconList",
};
</script>

<style lang="less" scoped>
.IconList {
  height: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //   border: 1px solid pink;
  .iconitem {
    // border: 1px solid pink;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    img {
      width: 50%;
      margin: auto;
    }
  }
}
</style>
>
