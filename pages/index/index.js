import request from "../../utils/request.js"
//index.js
//获取应用实例
Page({

  data: {
    //轮播图
    banners: [

    ],
    //菜单导航
    menus: [

    ],
    //楼层数据
    floors:[]
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

    //数据楼层
    request({
      url:"/api/public/v1/home/floordata"
    }).then(res=>{
     // console.log(res,'3333')
     const{message} = res.data;
     console.log(message,'5555')
     //赋值给floors
     this.setData({
       floors:message
     })

    })


  },


})