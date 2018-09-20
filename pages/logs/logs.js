//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../room/room'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
