Page({

  /**
   * 页面的初始数据
   */
  data: {
    zzry:{},
    jjsy:{},
    top2017:{}
  },

  getList:function(){
    var self = this;
    wx.request({
      url:'http://www.mosowe.com/data_moni/data.json',
      method:'GET',
      header:{
        "content-type":"json"
      },
      data:{
      },
      success:function(res){
        self.setData({ zzry: res.data.zzry })
        self.setData({ jjsy: res.data.jjsy })
        self.setData({ top2017: res.data.top2017 })
        
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  gotomore:function(event){
    wx.navigateTo({
      url: '/pages/moremovie/moremovie?name=' + event.currentTarget.dataset.movielisturl,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    this.getList()
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