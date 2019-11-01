// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否显示取消按钮
    showCancel:false,
    //输入框的值
    searchValue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //监听输入框，输入时候的事件
  handleInput(event) {
    //console.log(evevt)
    //能触发，接下来设置个双向数据绑定，没有双向数据绑定，只能通过event
    const {value} = event.detail;

    let showCancel;

    //判断输入框有没有值
    // if(value){
    //   //如果有值，这把showCancel设置为显示
    //   showCancel = true;
    // }
    //这样判断才能实现，当取消没值的时候隐藏
    showCancel = value ? true:false;

    //把值赋予到data
      this.setData({
        showCancel,
        //输入框的值
        searchValue:value
        
      })
  },
  //点击取消按钮的时候触发
  handleQuxiao(){
    //console.log(123)
    //
    this.setData({
      showCancel:false,
      searchValue:""
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

  
})