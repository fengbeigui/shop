import request from "../../utils/request.js"
//index.js
//获取应用实例
Page({

  data: {
    banners: [

    ],
    menus: [

    ]
  },

  onLoad() {
    //请求轮播图数据
    request({
      //1和l难区分，注意复制粘贴
      url: "/api/public/v1/home/swiperdata"
    }).then(res => {
      //console.log(res, '33333')
      const { message } = res.data;
      //赋值给data
      this.setData({
        banners: message,
      })
    })
    //请求菜单导航数据
    request({
      url: "/api/public/v1/home/catitems"
    }).then(res=>{
      //console.log(res, '222')
      //console.log(res.data,'333')
      const {message} = res.data;
      //赋值给data中menus
      this.setData({
        menus: message
      })
    })

    /* */


  },


})