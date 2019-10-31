// pages/goods_list/index.js
import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面传参数
    query: "",
    // 商品列表，接口请求回来的
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //option就是页面的参数，打印看看
    //console.log(options,'555') //点击后显示打印信息
    const {
      query
    } = options;
    //把数据传到到data中
    this.setData({
      query: query
    })

    //请求列表数据
    request({
      url: "/api/public/v1/goods/search",
      //ajax使用的是data; params使用的是axios
      data: {
        query,
        pagenum: 1,
        pagesize: 10
      }
    }).then(res => {
      console.log(res.data, '8888')
      //goods是商品列表
      const {
        goods
      } = res.data.message;

      //需要循环处理下价格(map),number下有个toFixed方法
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2);
        return v;
      })


      //数据存储到data
      this.setData({
        goods: newGoods
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})