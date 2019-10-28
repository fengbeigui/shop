import request from "../../utils/request.js"
//index.js
//获取应用实例
Page({

  onLoad(){

    request({
      url:"/api/public/vl/home/swiperdata"
    }).then(res=>{
      console.log(res)
    })
  }
  
})
