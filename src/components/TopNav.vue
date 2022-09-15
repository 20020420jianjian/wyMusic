<template>
  <div class="topnav">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
    <!-- 设置列表icon图标 -->
    <div>
      <ul>
        <li style="margin-left: 25px" @click="$router.push('/infoUser')">
          我的
        </li>
        <!-- 将第一个l外边距往前推25px -->
        <li class="active">发现</li>
        <li>云村</li>
        <li>视频</li>
      </ul>
    </div>
    <!-- 设置文字内容 -->
    <div>
      <router-link to="/search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </router-link>
    </div>
    <!-- 设置搜索icon图标 -->
  </div>
</template>

<script>
// 这是首页头部组件
export default {
  name: "TopNav",
};
</script>

<style scoped>
.topnav {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* border: 1px solid pink; */
}
/* 我尼玛是个蠢驴 */
li {
  /* border: 1px solid pink; */
  float: left;
  margin-right: 25px;
  line-height: 25px;
  font-size: 18px;
  text-align: center;
}
.active {
  font-weight: 900;
  font-size: 19px;
}
</style>
