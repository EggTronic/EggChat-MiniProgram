//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    welcomeTitle: '欢迎来到 EggChat',
    welcomeText: '加入拥有超过0人的EggChat社区',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loginText: ' 使用微信登录',
    logo: '../../assets/logo.svg'
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  _redirect() {
    wx.redirectTo({
      url: '/pages/dashboard/dashboard'
    })
  },

  onLoad() {
    if (app.globalData.userInfo) {
      this._redirect()
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = () => {
        this._redirect()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this._redirect()
        }
      })
    }
  },

  getUserInfo(e: any) {
    console.log(e)
    if (!e.detail.userInfo) return
    app.globalData.userInfo = e.detail.userInfo
    this._redirect()
  }
})
