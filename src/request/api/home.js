import service from "..";
//获取轮播图数据
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  });
}
//获取歌单list数据
export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=15",
  });
}
// get('/personalized',{limit:15}).then(res=>{console.log(res)})
export function get(url, params) {
  return service({
    method: "GET",
    url: url,
    data: params,
  });
}
//获取歌单内容数据
export function getMusicListitem(data) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${data}`,
  });
}
// 获取所有歌曲;
export function getitem(data) {
  return service({
    method: "GET",
    url: `/playlist/track/all?id=${data}&limit=10&offset=1`,
  });
}
// 获取歌词
export function getMusiclyric(data) {
  return service({
    method: "GET",
    url: `/lyric?id=${data}`,
  });
}
// 获取搜索
export function getMusicsearch(data) {
  return service({
    method: "GET",
    url: `/search?keywords=${data}`,
  });
}
export function getlogin(data) {
  return service({
    POST: "GET",
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
  });
}

export function getloginuser(data) {
  return service({
    POST: "GET",
    url: `/user/binding?uid=${data}`,
  });
}
// 用户绑定手机
