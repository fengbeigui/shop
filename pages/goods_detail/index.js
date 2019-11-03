// pages/goods_detail/index.js
import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //detail是商品详情,对象
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取id
    const {
      goods_id
    } = options;
    // 请求商品详情
    request({
      url: "/api/public/v1/goods/detail",
      data: {
        goods_id
      }
    }).then(res => {
      //console.log(res,'555')
      const {
        message
      } = res.data;

      //detail是商品详情
      this.setData({
        detail: message
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  //添加到本地的购物车
  handleAddCart() {
    //从本地获取购物车列表
    //console.log(123) //点击事件打印123
    const goods = wx.getStorageSync("goods") || {};
    const {
      goods_id,
      goods_name,
      goods_small_logo,
      goods_price
    } = this.data.detail;

    // 判断商品是否已经在购物车中,判断他的id
    const number = goods[goods_id] ? goods[goods_id].number + 1 : 1

    // 前面四个属性是商品详情提供的（需要在购物车页面中渲染）
    // number和selected属性是自己定义给购物车页面使用的
    // 使用对象的方式存储是方便快速查找属性，如果使用的数组，需要循环浪费性能
    goods[goods_id] = {
      goods_id,
      goods_name,
      goods_small_logo,
      goods_price,

      number: number,
      selected: true
    }
    //保存到本地
    wx.setStorageSync("goods", goods)
  }

})