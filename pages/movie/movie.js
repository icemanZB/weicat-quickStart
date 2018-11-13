// 2. 注册 Page，每一个页面都需要注册一个 Page
Page({

  // tab 之间的切换不会让页面重新加载，也就不会卸载。只会隐藏与显示
  // 在进行 ( NavigatorTo )，跳转到那个目标页面会被加载( load )，跳转之前的页面会被隐藏( hide )
  // 回退 ( NavigatorBack )，目标页面会 show( 不是加载 )，回退之前的页面会被卸载( unload )

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载，只会执行一次
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成，只会执行一次
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
   * 生命周期函数--监听页面卸载，只会执行一次
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