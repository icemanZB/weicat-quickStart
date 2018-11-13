//app.js
// 1.注册 App，只需要注册一次
// 会得到一个程序的实例，可以被其他页面访问
App({
  // 小程序启用的时候执行，在小程序运行期间只会运行一次，
  // 程序销毁( 过了一段时间没有运行，或手动删除了小程序在次添加运行 )之后，再次启动就会执行
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now());
    // 同步
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 每次在后台切换过来，就会执行
  onShow(){
    console.log('切换到小程序运行了');
  },
  // 每次切换到后台就会执行
  onHide(){
    console.log('小程序被隐藏在后台运行');
  },
  globalData: {
    userInfo: null
  }
})