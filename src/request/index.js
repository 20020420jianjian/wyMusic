import axios from "axios";
let service = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000",
  timeout: 3000,
});
export default service;
// 封装网易云音乐的接口
// baseURL: "https://netease-cloud-music-api-two-ashy.vercel.app/",
