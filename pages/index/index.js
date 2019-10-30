import request from "../../utils/request.js"
//index.js
//获取应用实例
Page({

  data: {
    banners: [
      "https://cdn.pinduoduo.com/home/static/img/subject/girlclothes.jpg",
      "https://cdn.pinduoduo.com/home/static/img/subject/boyshirt.jpg",
      "https://cdn.pinduoduo.com/home/static/img/subject/medical.jpg"
    ]
  },

  onLoad() {

    request({
      url: "/api/public/vl/home/swiperdata"
    }).then(res => {
      console.log(res)
    })
  },

  //轮播图

  /* */

})
