import request from "./utils/request.js"

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
 
  //指定基准路径
  request.defaults.baseURL = "https://api.zbztb.cn"
  },
  globalData: {
  
  }
})