// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //当前的初始数据
      current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击左侧的菜单时候触发
  handleChange(event){
    //获取index,,event.target事件目标
    const {index} = event.target.dataset;
    console.log(index,'点击打印索引值')
    //打印data数据
    this.setData({
      current:index
    })
  }


})