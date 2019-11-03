// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //收货地址
    address: {},
    //购物车商品列表
    goods: null
  },
  //获取收货地址
  // 获取收货地址
  handleAddress() {
    wx.chooseAddress({
      // 成功的方法
      success: (res) => {
        // 设置收货地址
        this.setData({
          address: {
            userName: res.userName,
            telNumber: res.telNumber,
            detail: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  },
  onShow() {
    //每次打开页面时候都在本地获取购物车的数据
    //这方法是开微信官方文档获取
    const goods = wx.getStorageSync("goods") || null;

    console.log(goods, '打印本地获取购物车的数据')
    this.setData({
      goods
    })
  },
  //数量减1
  handleReduce(event) {
    // console.log(event,'点击减的时候打印') //点击减的时候打印
    const {
      id
    } = event.target.dataset;
    const {
      goods
    } = this.data;

    //判断数量是否小于1
    if(goods[id].number <=1){
      wx.showModal({
        title:'提示',
        content:'是否要删除商品',
        success:(res)=>{
         
          if(res.confirm){
            //删除商品
            delete goods[id];
            //由于showModal是异步执行，所以需要把修改data的方式方法success中
            //修改data的值
            this.setData({
              goods
            })
            //保存到本地
            wx.setStorageSync("goods", goods)
          }
        }
      })
    } else {
      //数量减一
      goods[id].number -= 1;
      //修改data的值
      this.setData({
        goods
      })
      //保存到本地
      wx.setStorageSync("goods", goods)
    }
  },
  //检测是否有小数点并取整,禁止输入了小数点
  bindInput(event){
    //获取输入框的值
    const value = +event.detail.value;
    const {id} = event.target.dataset;
    const {goods} = this.data;

    //判断是否有小小数点
    goods[id].number = Math.floor(value);

    //修改data的值
    this.setData({
      goods
    });
  },
  //输入框输入数量
  bindChange() {
    //获取输入框的值
    const value = +event.detail.value;
    const {id} = event.target.dataset;
    const {goods} = this.data;

    //如果是空的或者是0
    goods[id].number = value === 0?1:value;

    //修改data的值
    this.setData({
      goods
    });
    //保存到本地
    wx.setStorageSync("goods", goods);
  },
  //数量加1
  handleAdd(event) {
    //console.log(event,'666') //点击加的时候打印
    //根据打印的信息解构数据
    const {
      id
    } = event.target.dataset;
    //从data中解构出来goods
    const {
      goods
    } = this.data;

    //数量加一
    goods[id].number += 1;

    //修改data的值
    this.setData({
      goods
    })
    //保存到本地
    wx.setStorageSync("goods", goods)
  },

  //选中状态取反
  handleSelected(event){
    const {id} = event.target.dataset;
    const {goods} = this.data;
    //把选中状态取反
    goods[id].selected = !goods[id].selected;

    this.setData({
      goods
    });
    //保存到本地
    wx.setStorageSync("goods", goods)
  }

})