// pages/category/index.js
//导入自己封装的请求
import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前的初始数据
    current: 0,
    //分类列表
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求分页数据
    request({
      url: "/api/public/v1/categories"
    }).then(res => {
      //console.log(res, '打印的分页数据信息')
      const { message } = res.data;
      this.setData({
        list: message
      })
    })

  },
  //点击左侧的菜单时候触发
  handleChange(event) {
    //获取index,,event.target事件目标
    const { index } = event.target.dataset;
    console.log(index, '点击打印索引值')
    //打印data数据
    this.setData({
      current: index
    })
  }


})