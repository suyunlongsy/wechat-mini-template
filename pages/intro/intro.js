const app = getApp()
const regeneratorRuntime = require(`${app.RUNTIME}`)
import io from 'io.js'

Page({
  data: {

  },
  search: async () => {
    try {
      const res2 = await io.search({ wd: '1111' })
      console.log(res2)
    } catch (e) {
      wx.showToast({
        title: e.errMsg,
      })
    }
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})