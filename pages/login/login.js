// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  getId: function (event) {
    app.data.personInfo.id = event.detail.value
  },
  getPsd: function (event) {
    app.data.personInfo.password = event.detail.value
  },
  login:function(){
    const self = this;
    wx.request({
      url: 'http://www.mosowe.com/data_moni/data.json',
      method:"GET",
      header: {
        "content-type": "json"
      },
      data: {
      },
      success: function (res) {
        let bool = false;
        if (app.data.personInfo.id != null && app.data.personInfo.password != null) {
          for (let i = 0; i < res.data.person.length; i++){
            if (app.data.personInfo.id == res.data.person[i].id && app.data.personInfo.password == res.data.person[i].password) {
              bool = true;
              break;
            }
            bool = false;
          }

          if (bool) {
            wx.showLoading({
              title: '登陆成功！',
              success:function(){
                wx.switchTab({
                  url: '/pages/person/person',
                })
              }
            })
            
          } else {
            wx.showModal({
              title: '提示',
              content: '用户或密码错误',
              showCancel: false
            })
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '用户或密码不能为空',
            showCancel: false
          })
        }
      },
      fail: function (err) {
        console.log(err)
      }



    })
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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