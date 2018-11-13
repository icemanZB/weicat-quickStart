//index.js
// 通过 getApp 全局函数获取应用实例
const app = getApp();

console.log(app.globalData);

Page({
  pData: {
    pVar: 2
  },
  data: {
    motto: 'Hello,World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    color: 'red'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    // this 可以访问到当前页面的实例
    console.log(this.pData);

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onTap(ev) {
    let {
      currentTarget,
      target
    } = ev;
    // currentTarget 触发事件的组件
    // target 触发组件原 ( 点击<text>，target 的 id 就是 "Text" )，由于事件冒泡 onTap 依然被执行
    console.log(ev);

    this.setData({
      motto: 'Ice,man'
    });
  },
  onGetNum(ev) {
    console.log('getNum', ev);
  },

  onAuthLocation(ev) {
    // 进行授权，不会得到授权之后的信息
    wx.authorize({
      scope: 'scope.userLocation',
      success: msg => {
        console.log('location succ', msg);
      },
      fail: ev => {
        console.log('location fail');
      }
    })
  },

  onGetLocation(ev) {
    wx.getLocation({
      success: msg => {
        console.log('get location', msg);
      },
      fail: ev => {
        console.log('get location fail');
      }
    })
  },

  onGetSetting() {
    wx.getSetting({
      success: msg => {
        console.log('授权相关信息', msg);
      }
    })
  },

  onGotoSetting() {
    wx.openSetting({
      success: msg => {
        console.log('设置完成', msg);
      }
    })
  },

  onCache() {
    wx.setStorage({
      key: 'name',
      data: {
        nickname: 'Iceman'
      },
      success: () => {
        wx.getStorage({
          key: 'name',
          success: function(res) {
            console.log(res);
          },
        });
      }
    })
  },

  onReq() {
    // 测试的时候，在详情里面打上不校验合法域名的勾
    wx.showLoading();
    wx.request({
      url: 'http://99.248.1.90/api/prd/list/city',
      data: {},
      method: 'get',
      success: res => {
        // wx.showToast({
        //   title: '操作成功',
        // })
        setTimeout(()=>{
          wx.hideLoading();
        },1000);
        console.log(res.data)
      }
    })
  }


})