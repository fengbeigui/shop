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
    goods: [],
    //是否有更多
    hasMore: true,
    //当前的也是
    pagenum: 1,
    // 函数节流，判断上次请求是否成功，成功之后再允许请求下一页数据
    loading: false

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
      query
    })


    //请求列表数据
    this.getList();
  },

  //请求列表数据
  getList() {
    //正在加载
    if (this.data.loading === true) {
      return;
    }
    //开始加载数据
    this.setData({
      loading: true
    })

    request({
      url: "/api/public/v1/goods/search",
      //ajax使用的是data; params使用的是axios
      data: {
        query: this.data.query,
        pagenum: this.data.pagenum,
        pagesize: 10
      }
    }).then(res => {
      //console.log(res.data, '8888')
      //goods是商品列表
      const {
        goods
      } = res.data.message;


      //判断是否到最后一页
      if (goods.length < 10) {
        this.setData({
          hasMore: false
        })
      }

      //需要循环处理下价格(map),number下有个toFixed方法
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2);
        return v;
      })
      //数据存储到data
      this.setData({
        //结构数组,合并数组
        goods: [...this.data.goods, ...newGoods],
        //页数加1
        pagenum: this.data.pagenum + 1,
        //请求成功之后把loading改为false
        loading: false
      })
    })
  },



  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    //触底事件
    //console.log(123) //到达底部触发打印

    if (this.data.hasMore) {
      //请求下一位数据
      this.setData({
        pagenum: this.data.pagenum + 1
      })
      this.getList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})