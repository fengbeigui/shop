// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否显示取消按钮
    showCancel: false,
    //输入框的值
    searchValue: "",
    //搜索历史列表
    keyword: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //
    // const arr = wx.getStorageSync('search') || [];

    // this.setData({
    //   keyword:arr
    // })
  },

  //监听输入框，输入时候的事件
  handleInput(event) {
    //console.log(evevt)
    //能触发，接下来设置个双向数据绑定，没有双向数据绑定，只能通过event
    const {
      value
    } = event.detail;

    let showCancel;

    //判断输入框有没有值
    // if(value){
    //   //如果有值，这把showCancel设置为显示
    //   showCancel = true;
    // }
    //这样判断才能实现，当取消没值的时候隐藏，value.trim()去除前后空格
    showCancel = value.trim() ? true : false;

    //把值赋予到data
    this.setData({
      showCancel,
      //输入框的值
      searchValue: value

    })
  },
  //点击取消按钮的时候触发
  handleQuxiao() {
    //console.log(123)
    //
    this.setData({
      showCancel: false,
      searchValue: ""
    })
  },
  //点击键盘右下角确定按钮时候触发
  handleFirm() {
    //打印输入框的值
    //console.log(this.data,'666')
    //console.log(this.data.searchValue)
    //先从本地存储拿出来数组，没有的等于空的数组
    const arr = wx.getStorageSync('search') || []

    //判断本地是否有数据，有的话就追加unshift
    arr.unshift(this.data.searchValue)

    //保存到本地
    wx.setStorageSync('search', arr)

    //转到搜索列表先
    wx.navigateTo({
      url: "/pages/goods_list/index?query=" + this.data.searchValue
    })
  },
  //清除所有本地的数据
  handleClear() {
    wx.removeStorageSync('search');

    this.setData({
      keyword: []
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

    //每次显示页面都从本地获取数据
    this.setData({
      keyword: wx.getStorageSync("search") || []
    })

  },


})