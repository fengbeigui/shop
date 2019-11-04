// pages/auth/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //用户同意授权后的事件方法，获取token所要的四个参数
  handleGetUserInfo(res) {
    const {
      encryptedData,rawData,iv,signature
    } = res.detail;

    //获取code
    wx.login({
      success(value) {
        const {code} = value;
        //请求必须要放在回调函数中
        request({
          url:"/api/public/v1/users/wxlogin",
          method:"POST",
          data:{
            encryptedData,
            rawData,
            iv,
            signature,
            code
          }
        }).then(res=>{
          const {token} = res.data.message;

          wx.setStorageSync("token", token);
        })
      }
    })
  }


})