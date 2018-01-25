// pages/person/person.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visited:null,
    hope:null,
    userName:null
  },


  loginOut:function(){
    this.setData({ visited: null })
    this.setData({ hope: null })
    this.setData({ userName: null })
    app.data.personInfo.id = null
    app.data.personInfo.password = null
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.data.personInfo.id)
    if (app.data.personInfo.id == null){
      wx.redirectTo({
        url: '/pages/login/login',
      })
      
    }else{
      var self = this;
      wx.request({
        url: 'http://www.mosowe.com/data_moni/data.json',
        method: 'GET',
        header: {
          "content-type": "json"
        },
        data: {
        },
        success: function (res) {
          for (let i = 0; i < res.data.person.length; i++) {
            if (app.data.personInfo.id == res.data.person[i].id) {
              self.setData({ visited: res.data.person[i].visited })
              self.setData({ hope: res.data.person[i].hope })
              self.setData({ userName: res.data.person[i].userName })
              
              break;
            }
          }
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})